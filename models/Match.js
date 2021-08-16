const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const matchSchema = mongoose.Schema({
  gameId: {
    type: Schema.Types.Number,
  },
  platformId: {
    type: Schema.Types.String
  },
  gameCreation: {
    type: Schema.Types.Number
  },
  gameDuration: {
    type: Schema.Types.Number
  },
  queueId: {
    type: Schema.Types.Number
  },
  mapId: {
    type: Schema.Types.Number
  },
  seasonId: {
    type: Schema.Types.Number
  },
  gameVersion: {
    type: Schema.Types.String
  },
  gameMode: {
    type: Schema.Types.String
  },
  gameType: {
    type: Schema.Types.String
  }
})