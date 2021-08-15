const bcrypt = require('bcrypt');
const uuid = require('uuid');

const mailService = require('./mail-service');
const tokenService = require('./token-service');
const UserModel = require('../models/user-model');
const UserDto = require('../dtos/user-dto');

class UserService {
  async registration(email, password){
    const candidate = await UserModel.findOne({email})
    if (candidate) {
      throw new Error(`Пользователь с email ${email} уже существует!`)
    };
    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuid.v4();

    const user = await UserModel.create({email, password: hashPassword, activationLink});
    await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);

    // userDto - user without password
    const userDto = new UserDto(user); // id, email, isActivated
    const tokens = tokenService.generateTokens({...userDto});

    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {...tokens, user: userDto}
  }
}

module.exports = new UserService();