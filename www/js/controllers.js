angular.module('starter.controllers', [])
//在这下面添加页面对应的控制器，每个控制器管理对应页面的功能，跳转等等
  .controller('startCtrl', function($scope, $state, showMsgService) {
    $scope.goFirst = function() {
      $state.go('first');
    }
  })

.controller('firstCtrl',function ($scope ,$state) {
    $scope.goDoor = function() {
        ////延时设置
        //var t = setTimeout(function(){$state.go('door');},800);
        //var screen =parseInt(window.screen.width);
        //$("#outside").css("width",1.5*screen+"px").css("left","-60%").css("transition","left 0.7s");
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
        $scope.hall_5 = function() {
            $state.go('ziliao');
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
        $scope.goAndi = function() {
            $state.go('andi_text');
        };
        //图片展示
         $('.click').click(function () {
               name = $(this).attr('name');
             list = "andi";
               $state.go('show_photo');
         });

        $scope.andiRight = function(){
            var nowSide = parseInt($("#main_andi").css("left"));
            var screen =parseInt(window.screen.width);
            var now = Math.abs(parseInt(nowSide/screen));
            if(now > 0){
                $("#back_andi,#file_andi").css("display","none");
                $("#andi_screen_1,#andi_screen_2,#andi_screen_3,#andi_screen_4").css("display","none");
                $("#main_andi").css("left",(-screen*(now-1))+"px").css("transition","left 1s");
                if(now == 1){
                    $("#back_andi,#file_andi,#andi_screen_1").css("display","block");
                }
                if(now == 2){
                    $("#andi_screen_2").css("display","block");
                }
                if(now == 3){
                    $("#andi_screen_3").css("display","block");
                }
            }
        };
        $scope.andiLeft = function(){
            var nowSide = parseInt($("#main_andi").css("left"));
            var screen =parseInt(window.screen.width);
            var now = Math.abs(parseInt(nowSide/screen))+2;
            $("#andi_screen_1,#andi_screen_2,#andi_screen_3,#andi_screen_4").css("display","none");
            if(now<=4){
                $("#main_andi").css("left",(-screen*(now-1))+"px").css("transition","left 1s");
                $("#back_andi,#file_andi").css("display","none");
                if(now == 2){
                    $("#andi_screen_2").css("display","block");
                }
                if(now == 3){
                    $("#andi_screen_3").css("display","block");
                }
                if(now == 4){
                    $("#andi_screen_4").css("display","block");
                }
            }

        };
    })

.controller('weilianCtrl', function($scope, $state) {
        $scope.goBack = function() {
            history.back();
        };
        $scope.goWeilian = function() {
            $state.go('weilian_text');
        };
        //图片展示
        $('.click').click(function () {
            name = $(this).attr('name');
            list = "weilian";
            $state.go('show_photo');
        });
        $scope.weilianRight = function(){
            var nowSide = parseInt($("#main_weilian").css("left"));
            var screen =parseInt(window.screen.width);
            var now = Math.abs(parseInt(nowSide/screen));
            $("#weilian_screen_2,#weilian_screen_3,#weilian_screen_4").css("display","none");
            if(now > 0){
                $("#back_weilian,#file_weilian").css("display","none");
                $("#main_weilian").css("left",(-screen*(now-1))+"px").css("transition","left 1s");
                if(now == 1){
                    $("#back_weilian,#file_weilian,#weilian_screen_1").css("display","block");
                }
                if(now == 2){
                    $("#weilian_screen_2").css("display","block");
                }
                if(now == 3){
                    $("#weilian_screen_3").css("display","block");
                }
            }
        };
        $scope.weilianLeft = function(){
            var nowSide = parseInt($("#main_weilian").css("left"));
            var screen =parseInt(window.screen.width);
            var now = Math.abs(parseInt(nowSide/screen))+2;
            if(now<=4){
                $("#main_weilian").css("left",(-screen*(now-1))+"px").css("transition","left 1s");
                $("#back_weilian,#file_weilian").css("display","none");
                $("#weilian_screen_1,#weilian_screen_2,#weilian_screen_3,#weilian_screen_4").css("display","none");
                if(now == 2){
                    $("#weilian_screen_2").css("display","block");
                }
                if(now == 3){
                    $("#weilian_screen_3").css("display","block");
                }
                if(now == 4){
                    $("#weilian_screen_4").css("display","block");
                }
            }

        };
    })

.controller('rangCtrl', function($scope, $state) {
    $scope.goBack = function() {
        history.back();
    };
        $scope.goRang = function() {
            $state.go('rang_text');
        };
        //图片展示
        $('.click').click(function () {
            name = $(this).attr('name');
            list = "rang";
            $state.go('show_photo');
        });
    $scope.rangRight = function(){
        var nowSide = parseInt($("#main_rang").css("left"));
        var screen =parseInt(window.screen.width);
        var now = Math.abs(parseInt(nowSide/screen));
        $("#rang_screen_2,#rang_screen_3,#rang_screen_4").css("display","none");
        if(now > 0){
            $("#back_rang,#file_rang").css("display","none");
            $("#main_rang").css("left",(-screen*(now-1))+"px").css("transition","left 1s");
            if(now == 1){
                $("#back_rang,#file_rang,#rang_screen_1").css("display","block");
            }
            if(now == 2){
                $("#rang_screen_2").css("display","block");
            }
            if(now == 3){
                $("#rang_screen_3").css("display","block");
            }
        }
    };
    $scope.rangLeft = function(){
        var nowSide = parseInt($("#main_rang").css("left"));
        var screen =parseInt(window.screen.width);
        var now = Math.abs(parseInt(nowSide/screen))+2;
        if(now<=4){
            $("#main_rang").css("left",(-screen*(now-1))+"px").css("transition","left 1s");
            $("#back_rang,#file_rang").css("display","none");
            $("#rang_screen_1,#rang_screen_2,#rang_screen_3,#rang_screen_4").css("display","none");
            if(now == 2){
                $("#rang_screen_2").css("display","block");
            }
            if(now == 3){
                $("#rang_screen_3").css("display","block");
            }
            if(now == 4){
                $("#rang_screen_4").css("display","block");
            }
        }

    };
})

    .controller('yueseCtrl', function($scope, $state) {
        $scope.goBack = function() {
            history.back();
        };
        $scope.goYuese = function() {
            $state.go('yuese_text');
        };
        //图片展示
        $('.click').click(function () {
            name = $(this).attr('name');
            list = "yuese";
            $state.go('show_photo');
        });
        $scope.yueseRight = function(){
            var nowSide = parseInt($("#main_yuese").css("left"));
            var screen =parseInt(window.screen.width);
            var now = Math.abs(parseInt(nowSide/screen));
            if(now > 0){
                $("#back_yuese,#file_yuese").css("display","none");
                $("#yuese_screen_2,#yuese_screen_3,#yuese_screen_4").css("display","none");
                $("#main_yuese").css("left",(-screen*(now-1))+"px").css("transition","left 1s");
                if(now == 1){
                    $("#back_yuese,#file_yuese,#yuese_screen_1").css("display","block");
                }
                if(now == 2){
                    $("#yuese_screen_2").css("display","block");
                }
                if(now == 3){
                    $("#yuese_screen_3").css("display","block");
                }
            }
        };
        $scope.yueseLeft = function(){
            var nowSide = parseInt($("#main_yuese").css("left"));
            var screen =parseInt(window.screen.width);
            var now = Math.abs(parseInt(nowSide/screen))+2;
            if(now<=4){
                $("#main_yuese").css("left",(-screen*(now-1))+"px").css("transition","left 1s");
                $("#back_yuese,#file_yuese").css("display","none");
                $("#yuese_screen_1,#yuese_screen_2,#yuese_screen_3,#yuese_screen_4").css("display","none");
                if(now == 2){
                    $("#yuese_screen_2").css("display","block");
                }
                if(now == 3){
                    $("#yuese_screen_3").css("display","block");
                }
                if(now == 4){
                    $("#yuese_screen_4").css("display","block");
                }
            }
        };
    })
    .controller('ziliaoCtrl', function($scope, $state) {
        $scope.goBack = function() {
            history.back();
        };
        $scope.text_1 = function() {
            $state.go('ziliao_1');
        };
        $scope.text_2 = function() {
            $state.go('ziliao_2');
        };
        $scope.text_3 = function() {
            $state.go('ziliao_3');
        };
        $scope.text_4 = function() {
            $state.go('ziliao_4');
        };
    })
    .controller('ziliao_1Ctrl', function($scope, $state) {
        $scope.goBack = function() {
            history.back();
        };
        $scope.text_1 = function() {
            $state.go('ziliao_1_1');
        };
        $scope.text_2 = function() {
            $state.go('ziliao_1_2');
        };
        $scope.text_3 = function() {
            $state.go('ziliao_1_3');
        };
        $scope.text_4 = function() {
            $state.go('ziliao_1_4');
        };
        $scope.text_5 = function() {
            $state.go('ziliao_1_5');
        };
        $scope.text_6 = function() {
            $state.go('ziliao_1_6');
        };
        $scope.text_7 = function() {
            $state.go('ziliao_1_7');
        };
        $scope.text_8 = function() {
            $state.go('ziliao_1_8');
        };
        $scope.text_9 = function() {
            $state.go('ziliao_1_9');
        };
    })
    .controller('ziliao_1_1Ctrl', function($scope, $state) {
        $scope.goBack = function() {
            history.back();
        };
    })
    .controller('ziliao_1_2Ctrl', function($scope, $state) {
        $scope.goBack = function() {
            history.back();
        };
    })
    .controller('ziliao_1_3Ctrl', function($scope, $state) {
        $scope.goBack = function() {
            history.back();
        };
    })
    .controller('ziliao_1_4Ctrl', function($scope, $state) {
        $scope.goBack = function() {
            history.back();
        };
    })
    .controller('ziliao_1_5Ctrl', function($scope, $state) {
        $scope.goBack = function() {
            history.back();
        };
    })
    .controller('ziliao_1_6Ctrl', function($scope, $state) {
        $scope.goBack = function() {
            history.back();
        };
    })
    .controller('ziliao_1_7Ctrl', function($scope, $state) {
        $scope.goBack = function() {
            history.back();
        };
    })
    .controller('ziliao_1_8Ctrl', function($scope, $state) {
        $scope.goBack = function() {
            history.back();
        };
    })
    .controller('ziliao_1_9Ctrl', function($scope, $state) {
        $scope.goBack = function() {
            history.back();
        };
    })
    .controller('ziliao_2Ctrl', function($scope, $state) {
        $scope.goBack = function() {
            history.back();
        };
        $scope.text_1 = function() {
            $state.go('ziliao_2_1');
        };
        $scope.text_2 = function() {
            $state.go('ziliao_2_2');
        };
    })
    .controller('ziliao_2_1Ctrl', function($scope, $state) {
        $scope.goBack = function() {
            history.back();
        };
    })
    .controller('ziliao_2_2Ctrl', function($scope, $state) {
        $scope.goBack = function() {
            history.back();
        };
    })
    .controller('ziliao_3Ctrl', function($scope, $state) {
        $scope.goBack = function() {
            history.back();
        };
        $scope.text_1 = function() {
            $state.go('ziliao_3_1');
        };
        $scope.text_2 = function() {
            $state.go('ziliao_3_2');
        };
        $scope.text_3 = function() {
            $state.go('ziliao_3_3');
        };
        $scope.text_4 = function() {
            $state.go('ziliao_3_4');
        };
        $scope.text_5 = function() {
            $state.go('ziliao_3_5');
        };
        $scope.text_6 = function() {
            $state.go('ziliao_3_6');
        };
        $scope.text_7 = function() {
            $state.go('ziliao_3_7');
        };
    })
    .controller('ziliao_3_1Ctrl', function($scope, $state) {
        $scope.goBack = function() {
            history.back();
        };
    })
    .controller('ziliao_3_2Ctrl', function($scope, $state) {
        $scope.goBack = function() {
            history.back();
        };
    })
    .controller('ziliao_3_3Ctrl', function($scope, $state) {
        $scope.goBack = function() {
            history.back();
        };
    })
    .controller('ziliao_3_4Ctrl', function($scope, $state) {
        $scope.goBack = function() {
            history.back();
        };
    })
    .controller('ziliao_3_5Ctrl', function($scope, $state) {
        $scope.goBack = function() {
            history.back();
        };
    })
    .controller('ziliao_3_6Ctrl', function($scope, $state) {
        $scope.goBack = function() {
            history.back();
        };
    })
    .controller('ziliao_3_7Ctrl', function($scope, $state) {
        $scope.goBack = function() {
            history.back();
        };
    })
    .controller('ziliao_4Ctrl', function($scope, $state) {
        $scope.goBack = function() {
            history.back();
        };
        $scope.text_1 = function() {
            $state.go('ziliao_4_1');
        };
        $scope.text_2 = function() {
            $state.go('ziliao_4_2');
        };
        $scope.text_3 = function() {
            $state.go('ziliao_4_3');
        };
        $scope.text_4 = function() {
            $state.go('ziliao_4_4');
        };
        $scope.text_5 = function() {
            $state.go('ziliao_4_5');
        };
    })
    .controller('ziliao_4_1Ctrl', function($scope, $state) {
        $scope.goBack = function() {
            history.back();
        };
    })
    .controller('ziliao_4_2Ctrl', function($scope, $state) {
        $scope.goBack = function() {
            history.back();
        };
    })
    .controller('ziliao_4_3Ctrl', function($scope, $state) {
        $scope.goBack = function() {
            history.back();
        };
    })
    .controller('ziliao_4_4Ctrl', function($scope, $state) {
        $scope.goBack = function() {
            history.back();
        };
    })
    .controller('ziliao_4_5Ctrl', function($scope, $state) {
        $scope.goBack = function() {
            history.back();
        };
    })
    .controller('andi_textCtrl', function($scope, $state) {
        $scope.goBack = function() {
            history.back();
        }
    })
    .controller('weilian_textCtrl', function($scope, $state) {
        $scope.goBack = function() {
            history.back();
        }
    })
    .controller('rang_textCtrl', function($scope, $state) {
        $scope.goBack = function() {
            history.back();
        }
    })
    .controller('yuese_textCtrl', function($scope, $state) {
        $scope.goBack = function() {
            history.back();
        }
    })
.controller('show_photoCtrl', function($scope, $state) {
    $("#screen_photo").attr("src","img/"+list+"/"+name+".jpg");
    $scope.goBack = function() {
        history.back();
    }
});
