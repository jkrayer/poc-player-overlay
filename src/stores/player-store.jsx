var Dispatcher = require('../dispatcher');
var AjaxHelper = require('../app/helpers/ajax');

function PlayerStore() {
  var players = [];

  AjaxHelper.get('/api/players')
  .then(function(data){
    players = data;
    triggerListeners();
  });

  var listeners = [];

  function getPlayers() {
    return players;
  }

  function deleteGroceryItem(player) {
    var index;
    players.filter(
      function(_player, _index){
        if (_player._id === player._id) {
          index = _index;
        }
      }
    );
    players[index] = player;
    triggerListeners();
    //RestHelper.del('api/items/' + item/_id);
  }

  function onChange(listener) {
    listeners.push(listener);
  }

  function triggerListeners(){
    listeners.forEach(function(listener){
      listener(players);
    });
  }

  Dispatcher.register(function(event){
    var split = event.type.split(':');
    if (split[0] === 'Player') {
      switch (split[1]) {
          case 'Update':
            updatePlayer(event.payload);
            break;
          default:
            break;
      }
    }
  });

  return {
    getPlayers: getPlayers,
    onChange: onChange
  };
}

module.exports = new PlayerStore();
