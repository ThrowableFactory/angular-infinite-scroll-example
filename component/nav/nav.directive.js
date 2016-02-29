angular.module('app.components')
       .directive('jcNav',jcNav);

function jcNav($state){
  var directive = {
    controller: navCtrl,
    controllerAs: 'vm',
    templateUrl: 'component/nav/nav.tmpl.html',
    bindToController: true
  };
  return directive;

  function navCtrl(jcNav, $scope, $filter, appEvent, APP_CONST) {
    var vm = this;
    vm.appTitle = APP_CONST.title;
    vm.appVersion = APP_CONST.version;
    vm.navs = $filter('orderBy')(jcNav.navConfig, jcNav.order, true);
    vm.gotoState = gotoState;

    /////////////////////////

    function gotoState(state){
      $state.go(state);
    }

  }
}