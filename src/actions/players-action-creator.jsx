var Dispatcher = require('../dispatcher');

module.exports = {
  update: function (player) {
    Dispatcher.dispatch({
      payload: player,
      type: 'Player:Update'
    });
  }
};
