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
            //cache刷新页面数据
            cache:'false',
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
        .state('andi_text',{
            url: '/andi_text',
            templateUrl: 'templates/andi_text.html',
            controller: "andi_textCtrl"
        })
        .state('weilian_text',{
            url: '/weilian_text',
            templateUrl: 'templates/weilian_text.html',
            controller: "weilian_textCtrl"
        })
        .state('rang_text',{
            url: '/rang_text',
            templateUrl: 'templates/rang_text.html',
            controller: "rang_textCtrl"
        })
        .state('yuese_text',{
            url: '/yuese_text',
            templateUrl: 'templates/yuese_text.html',
            controller: "yuese_textCtrl"
        })
        .state('ziliao',{
            url: '/ziliao',
            templateUrl: 'templates/ziliao.html',
            controller: "ziliaoCtrl"
        })
        .state('ziliao_1',{
            url: '/ziliao_1',
            templateUrl: 'templates/ziliao_1.html',
            controller: "ziliao_1Ctrl"
        })
        .state('ziliao_1_1',{
            url: '/ziliao_1_1',
            templateUrl: 'templates/ziliao_1_1.html',
            controller: "ziliao_1_1Ctrl"
        })
        .state('ziliao_1_2',{
            url: '/ziliao_1_2',
            templateUrl: 'templates/ziliao_1_2.html',
            controller: "ziliao_1_2Ctrl"
        })
        .state('ziliao_1_3',{
            url: '/ziliao_1_3',
            templateUrl: 'templates/ziliao_1_3.html',
            controller: "ziliao_1_3Ctrl"
        })
        .state('ziliao_1_4',{
            url: '/ziliao_1_4',
            templateUrl: 'templates/ziliao_1_4.html',
            controller: "ziliao_1_4Ctrl"
        })
        .state('ziliao_1_5',{
            url: '/ziliao_1_5',
            templateUrl: 'templates/ziliao_1_5.html',
            controller: "ziliao_1_5Ctrl"
        })
        .state('ziliao_1_6',{
            url: '/ziliao_1_6',
            templateUrl: 'templates/ziliao_1_6.html',
            controller: "ziliao_1_6Ctrl"
        })
        .state('ziliao_1_7',{
            url: '/ziliao_1_7',
            templateUrl: 'templates/ziliao_1_7.html',
            controller: "ziliao_1_7Ctrl"
        })
        .state('ziliao_1_8',{
            url: '/ziliao_1_8',
            templateUrl: 'templates/ziliao_1_8.html',
            controller: "ziliao_1_8Ctrl"
        })
        .state('ziliao_1_9',{
            url: '/ziliao_1_9',
            templateUrl: 'templates/ziliao_1_9.html',
            controller: "ziliao_1_9Ctrl"
        })
        .state('ziliao_2',{
            url: '/ziliao_2',
            templateUrl: 'templates/ziliao_2.html',
            controller: "ziliao_2Ctrl"
        })
        .state('ziliao_2_1',{
            url: '/ziliao_2_1',
            templateUrl: 'templates/ziliao_2_1.html',
            controller: "ziliao_2_1Ctrl"
        })
        .state('ziliao_2_2',{
            url: '/ziliao_2_2',
            templateUrl: 'templates/ziliao_2_2.html',
            controller: "ziliao_2_2Ctrl"
        })
        .state('ziliao_3',{
            url: '/ziliao_3',
            templateUrl: 'templates/ziliao_3.html',
            controller: "ziliao_3Ctrl"
        })
        .state('ziliao_3_1',{
            url: '/ziliao_3_1',
            templateUrl: 'templates/ziliao_3_1.html',
            controller: "ziliao_3_1Ctrl"
        })
        .state('ziliao_3_2',{
            url: '/ziliao_3_2',
            templateUrl: 'templates/ziliao_3_2.html',
            controller: "ziliao_3_2Ctrl"
        })
        .state('ziliao_3_3',{
            url: '/ziliao_3_3',
            templateUrl: 'templates/ziliao_3_3.html',
            controller: "ziliao_3_3Ctrl"
        })
        .state('ziliao_3_4',{
            url: '/ziliao_3_4',
            templateUrl: 'templates/ziliao_3_4.html',
            controller: "ziliao_3_4Ctrl"
        })
        .state('ziliao_3_5',{
            url: '/ziliao_3_5',
            templateUrl: 'templates/ziliao_3_5.html',
            controller: "ziliao_3_5Ctrl"
        })
        .state('ziliao_3_6',{
            url: '/ziliao_3_6',
            templateUrl: 'templates/ziliao_3_6.html',
            controller: "ziliao_3_6Ctrl"
        })
        .state('ziliao_3_7',{
            url: '/ziliao_3_7',
            templateUrl: 'templates/ziliao_3_7.html',
            controller: "ziliao_3_7Ctrl"
        })
        .state('ziliao_4',{
            url: '/ziliao_4',
            templateUrl: 'templates/ziliao_4.html',
            controller: "ziliao_4Ctrl"
        })
        .state('ziliao_4_1',{
            url: '/ziliao_4_1',
            templateUrl: 'templates/ziliao_4_1.html',
            controller: "ziliao_4_1Ctrl"
        })
        .state('ziliao_4_2',{
            url: '/ziliao_4_2',
            templateUrl: 'templates/ziliao_4_2.html',
            controller: "ziliao_4_2Ctrl"
        })
        .state('ziliao_4_3',{
            url: '/ziliao_4_3',
            templateUrl: 'templates/ziliao_4_3.html',
            controller: "ziliao_4_3Ctrl"
        })
        .state('ziliao_4_4',{
            url: '/ziliao_4_4',
            templateUrl: 'templates/ziliao_4_4.html',
            controller: "ziliao_4_4Ctrl"
        })
        .state('ziliao_4_5',{
            url: '/ziliao_4_5',
            templateUrl: 'templates/ziliao_4_5.html',
            controller: "ziliao_4_5Ctrl"
        })
        .state('show_photo',{
            url: '/show_photo',
            templateUrl: 'templates/show_photo.html',
            controller: "show_photoCtrl"
        })
        .state('door',{
            url: '/door',
            templateUrl: 'templates/door.html',
            controller: "doorCtrl"
        });


    //当没有状态匹配到时默认显示的状态
    $urlRouterProvider.otherwise('/start');
  });
