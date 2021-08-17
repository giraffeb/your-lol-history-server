const dotenv = require('dotenv');
const express = require("express");
const db = require('./models');

//환결설정 정보 읽기

const app = express();
const PORT = 9999;
const api = require("./api");


async function start(){
  const envFileName = process.env.NODE_ENV === 'production' ? 'release.env' : 'dev.env';
  dotenv.config({
    path: `./config/${envFileName}`
  });

  await db.init();
  
  app.use(api);

  app.listen(PORT, ()=>{
    console.log(`SERVER START: ${PORT}`);
  });

}


start();

