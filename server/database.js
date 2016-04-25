var Mongoose = require('mongoose');
var Player = require('./models/player');

Mongoose.connect('mongodb://localhost/mappoints', function () {
  console.log('connected to mongodb');

  Mongoose.connection.db.dropDatabase();

  var items = [
    {
      characterName: 'Hanzel Solomon',
      playerName: 'Tony',
      tag: '2nd Level Fighter; Human; Haunted One',
      initiativeModifier: 1,
      armorClass: '19',
      maxHitPoints: 20,
      currentHitPoints: 20,
      passivePerception: 13,
      passiveInvestigation: 10,
      passiveStealth: 11,
      trainedSkills: ['Athletics', 'Deception', 'Arcana', 'Intimidation']
    },
    {
      characterName: 'Kane Solomon',
      playerName: 'Scott',
      tag: '2nd Level Cleric; Human; Life Domain',
      initiativeModifier: 0,
      armorClass: '18',
      maxHitPoints: 17,
      currentHitPoints: 17,
      passivePerception: 15,
      passiveInvestigation: 12,
      passiveStealth: 10,
      trainedSkills: ['Insight', 'Investigation', 'Medicine', 'Perception', 'Religion'],
      additionalInfo: 'Speaks Infernal, Abyssal, Common'
    },
    {
      characterName: 'Rudabega Ironfundssuon',
      playerName: 'Slater',
      tag: '2nd Level Barbarian; Human; City Guard',
      initiativeModifier: 1,
      armorClass: '14',
      maxHitPoints: 25,
      currentHitPoints: 17,
      passivePerception: 12,
      passiveInvestigation: 9,
      passiveStealth: 11,
      trainedSkills: ['Grappler', 'Athletics', 'Insight'],
    },
    {
      characterName: 'Professor Hemlock',
      playerName: 'Marc',
      tag: '2nd Level Shadow Sorcerer; Halfling',
      initiativeModifier: 3,
      armorClass: '13/16',
      maxHitPoints: 12,
      currentHitPoints: 12,
      passivePerception: 11,
      passiveInvestigation: 12,
      passiveStealth: 13,
      trainedSkills: ['Arcana', 'Investigation', 'Intimidation', 'Persuasion']
    },
    {
      characterName: 'Alpha (Varcen Elolwyn)',
      playerName: 'Rob',
      tag: '2nd Level Circle of the Moon Druid; Half Wood Elf Variant',
      initiativeModifier: 0,
      armorClass: '13',
      maxHitPoints: 19,
      currentHitPoints: 16,
      passivePerception: 15,
      passiveInvestigation: 10,
      passiveStealth: 10,
      trainedSkills: ['Insight', 'Medicine', 'Nature', 'Perception', 'Religion', 'Survival']
    },
    {
      characterName: 'Otto Van Hearsey',
      playerName: 'Roger',
      tag: '2nd Level Rogue',
      initiativeModifier: 3,
      armorClass: '15',
      maxHitPoints: 9,
      currentHitPoints: 4,
      passivePerception: '14',
      passiveInvestigation: 14,
      passiveStealth: 15,
      trainedSkills: ['Disguise', 'Forgery', 'Thieve\'s Tools']
    }
  ];

  items.forEach(function (item) {
    new Player(item).save();
  });

});
