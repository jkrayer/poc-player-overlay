var Dispatcher = require('../dispatcher');

module.exports = {
  add: function (player) {
    Dispatcher.dispatch({
      payload: player,
      type: 'Player:Update'
    });
  }
};
