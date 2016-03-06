angular.module('starter.controllers', [])
//在这下面添加页面对应的控制器，每个控制器管理对应页面的功能，跳转等等
  .controller('startCtrl', function($scope, $state, showMsgService) {
    $scope.goFirst = function() {
      $state.go('first');
    }
  })

.controller('firstCtrl',function($scope ,$state) {
    $scope.goDoor = function() {
      $state.go('door');
    };
        $scope.onSwipeRight = function(){
            var nowSide = parseInt($("#outside").css("left"));
            var screen =parseInt(window.screen.width);
            var now = Math.abs(parseInt(nowSide/screen));
            if(now > 0){
                $("#outside").css("left",(-screen*(now-1))+"px").css("transition","left 0.7s");
            }
            if($nowSide==-$screen){
                $("#enter").css("display","block");
            }else{
                $("#enter").css("display","none");
            }
        };
        $scope.onSwipeLeft = function(){
            var nowSide = parseInt($("#outside").css("left"));
            var screen =parseInt(window.screen.width);
            var now = Math.abs(parseInt(nowSide/screen))+2;
            if(now<=3){
                $("#outside").css("left",(-screen*(now-1))+"px").css("transition","left 0.7s");
            }
            if($nowSide==-$screen){
                $("#enter").css("display","block");
            }else{
                $("#enter").css("display","none");
            }
        };
        $nowSide = parseInt($("#outside").css("left"));
        $screen =parseInt(window.screen.width);
        if($nowSide==-$screen){
            $("#enter").css("display","block");
        }else{
            $("#enter").css("display","none");
        }
  })

.controller('doorCtrl', function($scope, $state) {
    $scope.goHallway = function() {
        $state.go('wall-1');
    }
})

.controller('wall-1Ctrl', function($scope, $state) {
        $scope.gohall = function() {
            $state.go('hall');
        };
        $scope.readmore_1 = function() {
            $state.go('wall_1_readmore1');
        };
        $scope.readmore_2 = function() {
            $state.go('wall_1_readmore2');
        };
        $scope.wall_1Right = function(){
            var nowSide = parseInt($("#wall_1").css("left"));
            var screen =parseInt(window.screen.width);
            var now = Math.abs(parseInt(nowSide/screen));
            if(now > 0){
                $("#wall_1").css("left",(-screen*(now-1))+"px").css("transition","left 0.7s");
            }
            $("#readmore_1").css("display","block");
            $("#readmore_2").css("display","none");
        };
        $scope.wall_1Left = function(){
            var nowSide = parseInt($("#wall_1").css("left"));
            var screen =parseInt(window.screen.width);
            var now = Math.abs(parseInt(nowSide/screen))+2;
            if(now<=2){
                $("#wall_1").css("left",(-screen*(now-1))+"px").css("transition","left 0.7s");
            }
            $("#readmore_1").css("display","none");
            $("#readmore_2").css("display","block");
            $("#gohall").css("display","block");
        };
    })

.controller('wall_1_readmore1Ctrl', function($scope, $state) {
        $scope.goBack = function() {
            history.back();
        }
    })

 .controller('wall_1_readmore2Ctrl', function($scope, $state) {
        $scope.goBack = function() {
            history.back();
        }
    })

.controller('hallCtrl',function($scope ,$state) {
        $scope.hall_1 = function() {
            $state.go('andi');
        };
        $scope.hall_2 = function() {
            $state.go('weilian');
        };
        $scope.hall_3 = function() {
            $state.go('rang');
        };
        $scope.hall_4 = function() {
            $state.go('yuese');
        };
        //定义一变量 count 表示屏
        var count = 1;
        $scope.hallRight = function(){
            var nowSide = parseInt($("#hall").css("left"));
            var screen =parseInt(window.screen.width);
            var now = Math.abs(parseInt(nowSide/screen));
            if(now > 0){
                $("#hall").css("left",(-screen*(now-1))+"px").css("transition","left 0.7s");
                $("#hall_1,#hall_2,#hall_3,#hall_4,#hall_5").css("display","none");
                switch (now){
                    case 1:$("#hall_1").css("display","block");break;
                    case 2:$("#hall_2").css("display","block");break;
                    case 3:$("#hall_3").css("display","block");break;
                    case 4:$("#hall_4").css("display","block");break;
                }
            }
        };
        $scope.hallLeft = function(){
            var nowSide = parseInt($("#hall").css("left"));
            var screen =parseInt(window.screen.width);
            var now = Math.abs(parseInt(nowSide/screen))+2;
            if(now<=5){
                $("#hall").css("left",(-screen*(now-1))+"px").css("transition","left 0.7s");
                $("#hall_1,#hall_2,#hall_3,#hall_4,#hall_5").css("display","none");
                switch (now){
                    case 2:$("#hall_2").css("display","block");break;
                    case 3:$("#hall_3").css("display","block");break;
                    case 4:$("#hall_4").css("display","block");break;
                    case 5:$("#hall_5").css("display","block");break;
                }
            }
        };
    })

.controller('andiCtrl', function($scope, $state) {
        $scope.goBack = function() {
            history.back();
        };
        $scope.andiRight = function(){
            var nowSide = parseInt($("#main_andi").css("left"));
            var screen =parseInt(window.screen.width);
            var now = Math.abs(parseInt(nowSide/screen));
            if(now > 0){
                $("#back_andi").css("display","none");
                $("#main_andi").css("left",(-screen*(now-1))+"px").css("transition","left 1s");
                if(now == 1){
                    $("#back_andi").css("display","block");
                }
            }
        };
        $scope.andiLeft = function(){
            var nowSide = parseInt($("#main_andi").css("left"));
            var screen =parseInt(window.screen.width);
            var now = Math.abs(parseInt(nowSide/screen))+2;
            if(now<=4){
                $("#main_andi").css("left",(-screen*(now-1))+"px").css("transition","left 1s");
                $("#back_andi").css("display","none");
            }
        };
    })

.controller('weilianCtrl', function($scope, $state) {
        $scope.goBack = function() {
            history.back();
        };
        $scope.weilianRight = function(){
            var nowSide = parseInt($("#main_weilian").css("left"));
            var screen =parseInt(window.screen.width);
            var now = Math.abs(parseInt(nowSide/screen));
            if(now > 0){
                $("#back_weilian").css("display","none");
                $("#main_weilian").css("left",(-screen*(now-1))+"px").css("transition","left 1s");
                if(now == 1){
                    $("#back_weilian").css("display","block");
                }
            }
        };
        $scope.weilianLeft = function(){
            var nowSide = parseInt($("#main_weilian").css("left"));
            var screen =parseInt(window.screen.width);
            var now = Math.abs(parseInt(nowSide/screen))+2;
            if(now<=4){
                $("#main_weilian").css("left",(-screen*(now-1))+"px").css("transition","left 1s");
                $("#back_weilian").css("display","none");
            }

        };
    })

.controller('rangCtrl', function($scope, $state) {
    $scope.goBack = function() {
        history.back();
    };
    $scope.rangRight = function(){
        var nowSide = parseInt($("#main_rang").css("left"));
        var screen =parseInt(window.screen.width);
        var now = Math.abs(parseInt(nowSide/screen));
        if(now > 0){
            $("#back_rang").css("display","none");
            $("#main_rang").css("left",(-screen*(now-1))+"px").css("transition","left 1s");
            if(now == 1){
                $("#back_rang").css("display","block");
            }
        }
    };
    $scope.rangLeft = function(){
        var nowSide = parseInt($("#main_rang").css("left"));
        var screen =parseInt(window.screen.width);
        var now = Math.abs(parseInt(nowSide/screen))+2;
        if(now<=4){
            $("#main_rang").css("left",(-screen*(now-1))+"px").css("transition","left 1s");
            $("#back_rang").css("display","none");
        }

    };
})

    .controller('yueseCtrl', function($scope, $state) {
        $scope.goBack = function() {
            history.back();
        };
        $scope.yueseRight = function(){
            var nowSide = parseInt($("#main_yuese").css("left"));
            var screen =parseInt(window.screen.width);
            var now = Math.abs(parseInt(nowSide/screen));
            if(now > 0){
                $("#back_yuese").css("display","none");
                $("#main_yuese").css("left",(-screen*(now-1))+"px").css("transition","left 1s");
                if(now == 1){
                    $("#back_yuese").css("display","block");
                }
            }
        };
        $scope.yueseLeft = function(){
            var nowSide = parseInt($("#main_yuese").css("left"));
            var screen =parseInt(window.screen.width);
            var now = Math.abs(parseInt(nowSide/screen))+2;
            if(now<=4){
                $("#main_yuese").css("left",(-screen*(now-1))+"px").css("transition","left 1s");
                $("#back_yuese").css("display","none");
            }
        };
    });
