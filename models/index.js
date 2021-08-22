const mongoose = require("mongoose");

//TODO: dotenv 설정하기
async function init(){
  const {
    DB_HOST
  } = process.env;
  console.log("DB_HOST: ",DB_HOST);

  return mongoose.connect(DB_HOST, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(()=>{
    console.log("Connected MongoDB");
  })
  .catch((err)=>{
    console.log(err);
  });
}


module.exports = {
  init
}