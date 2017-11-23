angular
  .module('app')
  .component('fountainTitle', {
    templateUrl: 'app/title.html',
    controller: TitleController
  });

  /** @ngInject */
function TitleController($http) {
  var vm = this;

  $http
    .get('app/siglas.json')
    .then(function (response) {
      vm.siglas = response.data;
    });

  $http
    .get('app/recorridos.json')
    .then(function (response) {
      vm.recorridos = response.data;
    });
}
