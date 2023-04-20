import * as dotenv from 'dotenv'
dotenv.config({path:'./config.env'});
import express = require("express");
import morgan = require('morgan');
import logger from "./utility/logger";
import router from './routes/carRoute';


const app = express();
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  console.log("Development mode...");
}
app.use('/api/v1/cars', router)
app.use(express.json()); // Body parser for JSON data
app.use(express.static(`${__dirname}/public`)); // Serve static files

export default app;
