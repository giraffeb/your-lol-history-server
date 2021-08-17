const mongoose = require("mongoose");

//TODO: dotenv 설정하기
async function init(){
  const {
    db_host
  } = process.env;
  console.log("DB_HOST: ",db_host);

  return mongoose.connect(db_host, {
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