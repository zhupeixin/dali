angular.module('starter.controllers', [])
//在这下面添加页面对应的控制器，每个控制器管理对应页面的功能，跳转等等
  .controller('startCtrl', function($scope, $state, showMsgService) {
    $scope.goFirst = function() {
      $state.go('first');
    }
  })
  .controller('firstCtrl',function($scope ,$state) {
    $scope.goBackStart = function() {
      $state.go('start');
    };
        $scope.onSwipeRight = function(){
            $nowSide = parseInt($("#outside").css("left"));
            $screen =parseInt(window.screen.width);
            if($nowSide>-2*$screen){
                $nowSide-=$screen;
                $("#outside").css("left",$nowSide+"px");
            }
        };
        $scope.onSwipeLeft = function(){
            $nowSide = parseInt($("#outside").css("left"));
            $screen =parseInt(window.screen.width);
            if($nowSide<0){
                $nowSide+=$screen;
                $("#outside").css("left",$nowSide+"px");
            }
        }
  });
