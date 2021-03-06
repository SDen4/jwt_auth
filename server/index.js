// import dotenv & config function
require('dotenv').config();

// import needed libs
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const router = require('./router/index.js');

const errorMiddleware = require('./middlewares/error-middleware');

const PORT = process.env.PORT || 5000;

// create an example of the app
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/api', router);
app.use(errorMiddleware);

// start the app
const start = async () => {
  try {
    // connect to db
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(PORT, () =>
      console.log(`Yahoo! Server started on port: ${PORT}.`),
    );
  } catch (error) {
    console.log(error);
  }
};

//
start();
