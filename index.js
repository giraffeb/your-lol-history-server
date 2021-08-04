const express = require("express");
const app = express();
const PORT = 9999;

app.get('/', (req, res)=>{
  res.send("hello this is server");
});

app.listen(PORT, ()=>{
  console.log(`SERVER START: ${PORT}`);
})