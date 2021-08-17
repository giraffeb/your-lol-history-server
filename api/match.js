const router = require("express").Router();


router.get("/", async (req, res)=>{
  
  res.json({
    msg: "response clear"
  })
});

module.exports = router;