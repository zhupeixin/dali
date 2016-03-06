// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter.controllers','starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

  .config(function($stateProvider, $urlRouterProvider){
    //一个页面为一个状态，在下面配置其路径，控制器等，添加了首页和第一个跳转页的示例
    $stateProvider
      .state('start', {
        url: '/start',
        templateUrl: 'templates/start.html',
        controller: "startCtrl"
      })
      .state('first',{
        url: '/first',
        templateUrl: 'templates/first.html',
        controller: "firstCtrl"
      })
        .state('wall-1',{
            url: '/wall-1',
            templateUrl: 'templates/wall-1.html',
            controller: "wall-1Ctrl"
        })
        .state('wall_1_readmore1',{
            url: '/wall_1_readmore1',
            templateUrl: 'templates/wall_1_readmore1.html',
            controller: "wall_1_readmore1Ctrl"
        })
        .state('wall_1_readmore2',{
            url: '/wall_1_readmore2',
            templateUrl: 'templates/wall_1_readmore2.html',
            controller: "wall_1_readmore2Ctrl"
        })
        .state('hall',{
            url: '/hall',
            templateUrl: 'templates/hall.html',
            controller: "hallCtrl"
        })
        .state('andi',{
            url: '/andi',
            templateUrl: 'templates/andi.html',
            controller: "andiCtrl"
        })
        .state('weilian',{
            url: '/weilian',
            templateUrl: 'templates/weilian.html',
            controller: "weilianCtrl"
        })
        .state('rang',{
            url: '/rang',
            templateUrl: 'templates/rang.html',
            controller: "rangCtrl"
        })
        .state('yuese',{
            url: '/yuese',
            templateUrl: 'templates/yuese.html',
            controller: "yueseCtrl"
        })
        .state('door',{
            url: '/door',
            templateUrl: 'templates/door.html',
            controller: "doorCtrl"
        });


    //当没有状态匹配到时默认显示的状态
    $urlRouterProvider.otherwise('/start');
  });
