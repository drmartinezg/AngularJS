(function () {
  'use strict';

  angular.module('userList', []);

  function userListController($http) {
    var vm = this;

    $http.get("http://jsonplaceholder.typicode.com/users")
      .then(function(data) {
        console.log(data);
        vm.usuarios = data.data;
      })
  }

  var userList = {
	templateUrl: "./js/components/user-list/user-list.html",
	controller: "userListController"
  };

  angular
    .module('userList')
    .controller('userListController', userListController)
    .component('userList', userList);

})();