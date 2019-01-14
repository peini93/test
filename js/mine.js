$(function() {
    /*輸入框焦點*/

    $(".lRMain input").focus(function() {
        $(".InputBox").removeClass('Active');
        $(this).parent().addClass('Active');
    });
    $(".lRMain input").focusout(function() {
        $(".InputBox").removeClass('Active');
    });
    $(".MemberContent .InputBox input").focus(function() {
        $(".MemberContent .InputBox input").removeClass('Active');
        $(this).addClass('Active');
    });
    $(".MemberContent .InputBox input").focusout(function() {
        $(".MemberContent .InputBox input").removeClass('Active');
    });

    /*showma 文字欄位 /下拉選單 */
    $(".MemberContent .InputBox textarea").focus(function() {
        $(".MemberContent .InputBox textarea").addClass("Active");
    });
    $(".MemberContent .InputBox textarea").blur(function() {
        $(".MemberContent .InputBox textarea").removeClass("Active");
    });

    $(".MemberContent .SelectBox input").focus(function() {
        $(".MemberContent .SelectBox input").addClass("Active");
    });
    $(".MemberContent .SelectBox input").blur(function() {
        $(".MemberContent .SelectBox input").removeClass("Active");
    });


    /*輪播*/
    $(window).load(function() {
        $('.flexslider').flexslider({
            animation: "fade",
            /*fade or slide 動態淡入淡出或是滑動*/
            direction: "horizontal",
            /*horizontal or vertical 垂直水平*/
            slideshowSpeed: 3000,
            /*輪播速度*/
            pauseOnHover: "false",
            /*true or false 移入內容是否停止*/
            mousewheel: false,
            controlNav: true,
            directionNav: false,
        });
    });

    /*公告欄*/
    // $(function(){
    //     // 設定 travelocity
    //     $("ul#ticker01").liScroll({
    //         travelocity: 0.05
    //     });
    // });

    /*下拉選單*/
    $("ul.HeaderNav li.DropDown").hover(function() {
        $(this).children('.DropDownBox').stop().fadeIn(200);
    }, function() {
        $(this).children('.DropDownBox').stop().fadeOut(200);
    });




    /*未認證按紐滑動*/
//  $(function() {
//         $(".Omoveicon").hover(function() {
//             $('.Omoveicon').stop().addClass("J-Omoveicon0");
//         }, function() {
//              $('.Omoveicon').stop().removeClass("J-Omoveicon0");
//         });
//     });

//     已認證按紐不動
// $(function() {
//         $(".Omoveicon.checkok").hover(function() {
//             $('.Omoveicon').stop().removeClass("J-Omoveicon0");
//         }, function() {
//             $('.Omoveicon').stop().removeClass("J-Omoveicon0");
//         });
//     });



    /*公告欄*/
    $(function() {
        var $block = $('#block1'),
            $li = $('ul li', $block),
            _height = $li.outerHeight(),
            speed = 2000,
            index = 0;

        var _first = $li.eq(0).html();

        $block.children('ul').append('<li>' + _first + '</li>');
        var $li = $('ul li', $block);

        function pull() {
            index = (index + 1) % $li.length;
            $block.animate({
                scrollTop: index * _height
            }, function() {
                if (index == $li.length - 1) {
                    index = 0;
                    $block.scrollTop(0);
                }
            });
            setTimeout(pull, speed);
        }

        setTimeout(pull, speed);
    });

    /*娛樂場滑動*/
    $(".PgGo").click(function() {
        $('html, body').stop().animate({
            scrollTop: $(" .PgMain").offset().top
        }, 500);
        return false
    });

    /*娛樂場切換*/
    $(".PgNav ul li.PgN").mouseenter(function() {
        $(".PgNav ul li").removeClass("Active");
        $(this).addClass("Active");
        $(".PgChange").css("display", "none");
        var N = this.id.substr(2);
        $("#SB" + N).css("display", "block");
    });


    /*代理人切換*/
    $(".elmLeft ul li").mouseenter(function() {
        $(".elmLeft ul li").removeClass("Active");
        $(this).addClass("Active");
        $(".elmRight .moneylist .mboxstyle").css("display", "none");
        var N = this.id.substr(2);
        $("#MB" + N).css("display", "block");
    });



    /*小游戏点击*/
        
    $(".GameList ul li a").click(function() {       
        $(this).parent().parent().children(".GameList ul li").removeClass('Active');       
        $(this).parent().addClass('Active');    
    });
    $(".next").click(function() {         /* Act on the event */
        GameLi = $(this).parent(".GameAll").find(".GameList li");
        GameLiActive = $(this).parent(".GameAll").find(".GameList li.Active");        
        GameListLength = GameLi.length;        
        if (GameLiActive.index() == (GameListLength - 1)) {          
            GameLi.removeClass('Active');          
            GameLi.eq(0).addClass('Active');        
        } else {           
            GameLiActive.removeClass('Active').next("li").addClass('Active');        
        }    
    });    
    $(".prev").click(function() {         /* Act on the event */
        GameLi = $(this).parent(".GameAll").find(".GameList li");
        GameLiActive = $(this).parent(".GameAll").find(".GameList li.Active");        
        GameListLength = GameLi.length;        
        if (GameLiActive.index() <= 0) {          
            GameLi.removeClass('Active');          
            GameLi.eq(GameListLength - 1).addClass('Active');        
        } else {           
            GameLiActive.removeClass('Active').prev("li").addClass('Active');        
        }    
    });
    /*小遊戲回到上方*/
    /*$(".GameList ul li a,.next ,.prev").click(function() {
        $("html,body").animate({"scrollTop":"447px"});
    });＊/

     /*小遊戲切換1*/
    $(function() {
        $(".imageSliderExt .carousel").jCarouselLite({
            btnNext: ".imageSliderExt .next",
            btnPrev: ".imageSliderExt .prev",
            visible: 1,
            btnGo: [".imageSliderExt .1", ".imageSliderExt .2",
                ".imageSliderExt .3", ".imageSliderExt .4",
                ".imageSliderExt .5", ".imageSliderExt .6",
                ".imageSliderExt .7", ".imageSliderExt .8",
                ".imageSliderExt .9", ".imageSliderExt .10",
                ".imageSliderExt .11", ".imageSliderExt .12"
            ]
        });
    });
    /*小遊戲切換2*/
    $(function() {
        $(".imageSliderExt2 .carousel2").jCarouselLite({
            btnNext: ".imageSliderExt2 .next",
            btnPrev: ".imageSliderExt2 .prev",
            visible: 1,
            btnGo: [".imageSliderExt2 .1", ".imageSliderExt2 .2",
                ".imageSliderExt2 .3", ".imageSliderExt2 .4",
                ".imageSliderExt2 .5", ".imageSliderExt2 .6",
                ".imageSliderExt2 .7", ".imageSliderExt2 .8",
                ".imageSliderExt2 .9", ".imageSliderExt2 .10",
                ".imageSliderExt2 .11", ".imageSliderExt2 .12"
            ]
        });
    });
    /*小遊戲切換3*/
    $(function() {
        $(".imageSliderExt3 .carousel3").jCarouselLite({
            btnNext: ".imageSliderExt3 .next",
            btnPrev: ".imageSliderExt3 .prev",
            visible: 1,
            btnGo: [".imageSliderExt3 .1", ".imageSliderExt3 .2",
                ".imageSliderExt3 .3", ".imageSliderExt3 .4",
                ".imageSliderExt3 .5", ".imageSliderExt3 .6",
                ".imageSliderExt3 .7", ".imageSliderExt3 .8",
                ".imageSliderExt3 .9", ".imageSliderExt3 .10",
                ".imageSliderExt3 .11", ".imageSliderExt3 .12"
            ]
        });
    });
    /*小遊戲切換4*/
    $(function() {
        $(".imageSliderExt4 .carousel4").jCarouselLite({
            btnNext: ".imageSliderExt4 .next",
            btnPrev: ".imageSliderExt4 .prev",
            visible: 1,
            btnGo: [".imageSliderExt4 .1", ".imageSliderExt4 .2",
                ".imageSliderExt4 .3", ".imageSliderExt4 .4",
                ".imageSliderExt4 .5", ".imageSliderExt4 .6",
                ".imageSliderExt4 .7", ".imageSliderExt4 .8",
                ".imageSliderExt4 .9", ".imageSliderExt4 .10",
                ".imageSliderExt4 .11", ".imageSliderExt4 .12"
            ]
        });
    });

    /*小遊戲切換5*/
    $(function() {
        $(".imageSliderExt5 .carousel5").jCarouselLite({
            btnNext: ".imageSliderExt5 .next",
            btnPrev: ".imageSliderExt5 .prev",
            visible: 1,
            btnGo: [".imageSliderExt5 .1", ".imageSliderExt5 .2",
                ".imageSliderExt5 .3", ".imageSliderExt5 .4",
                ".imageSliderExt5 .5", ".imageSliderExt5 .6",
                ".imageSliderExt5 .7", ".imageSliderExt5 .8",
                ".imageSliderExt5 .9", ".imageSliderExt5 .10",
                ".imageSliderExt5 .11", ".imageSliderExt5 .12"
            ]
        });
    });
    /*小遊戲切換6*/
    $(function() {
        $(".imageSliderExt6 .carousel6").jCarouselLite({
            btnNext: ".imageSliderExt6 .next",
            btnPrev: ".imageSliderExt6 .prev",
            visible: 1,
            btnGo: [".imageSliderExt6 .1", ".imageSliderExt6 .2",
                ".imageSliderExt6 .3", ".imageSliderExt6 .4",
                ".imageSliderExt6 .5", ".imageSliderExt6 .6",
                ".imageSliderExt6 .7", ".imageSliderExt6 .8",
                ".imageSliderExt6 .9", ".imageSliderExt6 .10",
                ".imageSliderExt6 .11", ".imageSliderExt6 .12"
            ]
        });
    });
    /*小遊戲切換7*/
    $(function() {
        $(".imageSliderExt7 .carousel7").jCarouselLite({
            btnNext: ".imageSliderExt7 .next",
            btnPrev: ".imageSliderExt7 .prev",
            visible: 1,
            btnGo: [".imageSliderExt7 .1", ".imageSliderExt7 .2",
                ".imageSliderExt7 .3", ".imageSliderExt7 .4",
                ".imageSliderExt7 .5", ".imageSliderExt7 .6",
                ".imageSliderExt7 .7", ".imageSliderExt7 .8",
                ".imageSliderExt7 .9", ".imageSliderExt7 .10",
                ".imageSliderExt7 .11", ".imageSliderExt7 .12"
            ]
        });
    });

     /*存款提示*/
$(".choose-wrap li a").click(function() {       
        $(".choose-wrap li a").removeClass('active');    
        $(this).addClass('active');
    });



});

/*高級代理人跳窗*/
$(function() {
    /*高級代理人輸入框焦點*/

    $(".NewAffiliatesSearch input").focus(function() {
        $(this).addClass('Active');
        $(this).parent().children("LABEL").addClass('Active');
        $(this).parent().children("i").addClass('Active');
    });
    $(".NewAffiliatesSearch input").focusout(function() {
        $(this).removeClass('Active');
        $(this).parent().children("LABEL").removeClass('Active');
        $(this).parent().children("i").removeClass('Active');
    });

    $(".NewAffiliatesSelect").click(function() {
         $(".NewAffiliatesOption").slideToggle(100);
    });


/*高級代理人收納*/

    var SwitchAffiliates = false;
        
    $(".NewAffiliatesSwitch").on("click" ,function(){
            if(SwitchAffiliates==false){
                $(".NewAffiliatesRight").css({width: '0'});
                $(".LightBoxMain").removeClass('NewAffiliates2');
                $(".LightBoxMain").addClass('NewAffiliates1');
                $(".NewAffiliatesSwitch").addClass('Active');
                SwitchAffiliates = true;
            }else{
                $(".NewAffiliatesRight").delay(265).animate({width: '515px'},0);
                $(".NewAffiliatesSwitch").removeClass('Active');
                $(".LightBoxMain").removeClass('NewAffiliates1');
                $(".LightBoxMain").addClass('NewAffiliates2');
                SwitchAffiliates=false;
            }
    });


/*高級代理人項目收納*/
    $(".NewAffiliatesListBtn").click(function() {
        if($(this).hasClass('Active')){
            $(this).removeClass('Active');
            $(this).parent().children(".NewAffiliatesListBg ul").stop().slideUp(400);
        }else{
            $(".NewAffiliatesListBtn").removeClass('Active');
            $(".NewAffiliatesListBg ul").stop().slideUp(400);
            $(this).addClass('Active');
            $(this).parent().children(".NewAffiliatesListBg ul").stop().slideDown(400);
        }
    });

    /*高級代理人首頁下拉*/
    $(".HeighPlanBarSelectMain").click(function() {
         $(".HeighPlanBarSelectOption").slideToggle(100);
    });
     
});








    



    
