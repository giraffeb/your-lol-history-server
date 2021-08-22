const {
  RIOT_API_HOST,
  RIOT_API_KEY
} = process.env;
const Axios = require("axios");
const axios = Axios.create({
  baseURL: RIOT_API_HOST,
  timeout: 15000,
  headers: {
    "X-Riot-Token": RIOT_API_KEY
  }
});


const getMatchList = async ()=>{

};



const getSummonerByName = async (summonerName)=>{
  const url = `/lol/summoner/v4/summoners/by-name/${summonerName}`;

  let response;
  try{
    response = await axios({
      url
    });

  }catch(error){
    console.log(error);
  }
  
  return response;
}



module.exports = {
  getMatchList,
  getSummonerByName
}