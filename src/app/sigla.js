
'use strict';

function SiglaController($scope) {
  $scope.flecha = false;
}

angular
  .module('app')
  .component('siglas', {
    templateUrl: 'app/sigla.html',
    controller: SiglaController,
    bindings: {
      sigla: '<'
    }
  });
