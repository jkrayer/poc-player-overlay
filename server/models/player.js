var Mongoose = require('mongoose');

var PlayerSchema = {
  id: String,
  characterName: String,
  playerName: String,
  tag: String,
  initiativeModifier: Number,
  armorClass: String,
  maxHitPoints: Number,
  currentHitPoints: Number,
  passivePerception: Number,
  passiveInvestigation: Number,
  passiveStealth: Number,
  trainedSkills: Array,
  additionalInfo: String
};

var Player = Mongoose.model('Player', PlayerSchema, 'Players');

module.exports = Player;
