// import dotenv & config function
require('dotenv').config();

// import needed libs
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 5000;

// create an example of the app
const app = express()

// start the app
const start =  async() => {
  try {
    app.listen(PORT, () => console.log(`Yahoo! Server started on port: ${PORT}.`))
  } catch (error) {
    console.log(error);
  }
}

// 
start();