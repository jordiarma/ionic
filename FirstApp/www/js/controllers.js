angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Ciutats) {
    Ciutats.all().then(function(result) {
        $scope.ciutats = result.data.list;
    }, function (error) {
        console.error('Error carregant dades', error);
    });
})

.controller('ChatsCtrl', function($scope, $stateParams, Ciutats) {
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
  Ciutats.get($stateParams.idCiutat).then(function(result) {
    $scope.ciutat = result.data;
    console.log($scope.ciutat);
  })
  //$scope.chat = Ciutats.get($stateParams.ciutatId); 
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
