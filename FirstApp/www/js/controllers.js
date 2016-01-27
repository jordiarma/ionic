angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Ciutats) {
    $scope.ciutats = Ciutats.all();
    $scope.buscar = function(cercador) {
      alert(cercador);
    }
})

.controller('ChatsCtrl', function($scope, Ciutats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Ciutats.all();
  $scope.remove = function(chat) {
    Ciutats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Ciutats) {
  $scope.chat = Ciutats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
