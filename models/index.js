const env = process.env.NODE_ENV;


const mongoose = require("mongoose");


//TODO: dotenv 설정하기
mongoose.connect(host, {
  useNewUrlParser: true,
  useCreateIndex: true
})
.then(()=>{
  console.log("Connected MongoDB");
})
.catch((err)=>{
  console.log(err);
})