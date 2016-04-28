var GUID = require('guid'); //Please use node-uuid instead. It is much better.
var listeners = {};

module.exports = {
  register: function (callback) {
    var id = GUID.raw();
    listeners[id] = callback;
    return id;
  },
  dispatch: function (payload) {
    //console.info('Dispatching ...', payload);
    for (var id in listeners) {
      var listener = listeners[id];
      listener(payload);
    }
  }
};
