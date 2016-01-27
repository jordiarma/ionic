angular.module('starter.services', [])

.factory('Ciutats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var ciutats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return ciutats;
    },
    remove: function(ciutats) {
      ciutats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < ciutats.length; i++) {
        if (ciutats[i].id === parseInt(chatId)) {
          return ciutats[i];
        }
      }
      return null;
    }
  };
});
