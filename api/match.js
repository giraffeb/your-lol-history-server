const router = require("express").Router();

const matchService = require("../service/match");

router.get("/:summonerName", async (req, res)=>{
  
  
  const result = await matchService.getMatchList(summonerName);

  res.send(result);
});

module.exports = router;