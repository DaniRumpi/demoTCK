angular
  .module('app')
  .component('fountainTitle', {
    templateUrl: 'app/title.html',
    controller: TitleController
  });

  /** @ngInject */
function TitleController($http) {
  var vm = this;
  console.log(vm);

  $http
    .get('app/siglas.json')
    .then(function (response) {
      vm.siglas = response.data;
    });
}
