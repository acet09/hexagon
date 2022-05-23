$(document).ready(function(){

    var win_width=$(window).width();
    var map_scroll=$

    if(win_width>1024){
        // @@pc 영역
        // 주메뉴 마우스 오버 -> 서브 
        $("header nav > ul > li").hover(function(){
            $(this).find('.sub').stop().slideDown();
            // $('.sub').stop().slideDown();
        },function(){
            $(this).find('.sub').stop().slideUp();
            // $('.sub').stop().slideUp();
        });

        // fullpage 풀페이지 영역
        $('#fullpage').fullpage({
            //options here
            // 마우스휠 스크롤링
            autoScrolling:true,
            // 키보드로 스크롤링
            keyboardScrolling: true,
            scrollHorizontally: true,
            navigation: true,
            navigationPosition: 'right',
            navigationTooltips: ['MAIN', 'STORY',"쇼핑하기","이벤트","농장","신규출시","매장","SNS"],
                        
            afterLoad:function(anchorLink,index){                
                // 오른쪽 네비게이션 버튼 footer영역 숨김
                if(index == 9){
                    $('#fp-nav').hide();
                }else{
                    $('#fp-nav').show();
                };
            }   
        });        


        // splide 스플라이더 PC line_tab pc 설정
        var main = new Splide( '#main-carousel', {
            type      : 'fade',
            rewind    : true,
            pagination: false,
            arrows    : false,       
            drag      : false
        } );        
        var thumbnails = new Splide( '#thumbnail-carousel', {
            fixedWidth  : 'auto',
            fixedHeight : 60,
            gap         : 5,
            rewind      : true,
            pagination  : false, // 하단 동그라미 버튼
            isNavigation: true,  // 버튼 클릭 이벤트            
            drag      : false
            });        
        main.sync( thumbnails );
        main.mount();
        thumbnails.mount();


    }else{
        // @@태블릿 ,모바일 버전

        $('.mobile_menu_nav nav > ul > li').removeClass('active');
        $('.mobile_menu_nav nav > ul > li').click(function(){
            if($(this).attr('class') != 'active'){
                $('.mobile_menu_nav nav > ul > li').removeClass('active');
                $(this).addClass('active');  
                $('.mobile_menu_nav nav > ul > li .sub').stop().slideUp();
                $(this).find('.sub').stop().slideDown();
            }else{
                $(this).removeClass();
                $(this).find('.sub').stop().slideUp();
            }       
        });

        $('.mobile_menu_tright .fa-xmark').click(function(){
            $('.mobile_menu_nav').animate({
                right:'-100%'
            });
            $('.mobile_menu_nav_back').fadeOut();
        });
        $('.mobile_menu_btn a').click(function(){
            $('.mobile_menu_nav').animate({
                right:'0'
            });
            $('.mobile_menu_nav_back').fadeIn();
        });


        // splide 스플라이더 모바일( line_tab ) 
        var main = new Splide( '#main-carousel', {
            type      : 'fade',
            rewind    : true,
            pagination: false,
            arrows    : false,
            drag      : false            
        } );        
        var thumbnails = new Splide( '#thumbnail-carousel', {
            fixedWidth  : 'auto',
            // fixedWidth  : 100,
            rewind      : true,
            pagination  : false, // 하단 동그라미 버튼
            isNavigation: true,  // 버튼 클릭 이벤트            
            drag: false, 
            // focus: 'center'
            });        
        main.sync( thumbnails );
        main.mount();
        thumbnails.mount();
        
        

    } 
    // @@@@@@@@@@ END @@@@@@@@@@@

    
    // 1. swiper 스와이퍼 (pc 태블릿 모바일 모두 포함)
    var swiper = new Swiper(".mySwiper", {
        // autoplay: {delay:4000},
        // loop: true,        
        effect:'fade',        
        pagination: {
        el: ".swiper-pagination",
        clickable:true,        
        },
        pagination: {
            el: ".swiper-pagination",
            clickable:true,        
        },
    });
    
    // 2. TweenMax 트윈맥스-도형 애니메이션 
    $(".contents .hover_ani ").on('mouseenter', function(){
        // 이벤트 객체 찾아서 실행
        var $child=$(this).find('.li_bg');
        // 실행시간
        var duration=0.5;
        // 딜레이
        var delay=0.1;
    TweenMax.to($child, duration, {scaleY:1.1 , ease:Expo.easeOut}); 
    TweenMax.to($child, duration, {scaleX:1.1, scaleY:1.1 , ease:Back.easeOut,
    easeParams:[3], delay:delay});
    TweenMax.to($child, duration*1.25, {scaleX:1, scaleY:1 , ease:Back.easeOut,
    easeParams:[6], delay:delay*3});
    });

    // 3. slick slider 슬릭 슬라이더( six_tab )
    // $('.product').slick({
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     fade: true,
    //     cssEase: 'linear'
    // });


    

        // hive 영역 버튼 5개 위치값 정하기        
        
        // var posx=['50%','20%','20%','50%','80%','80%']
        // var posy=['15%','35%','65%','85%','65%','35%']

        // hive_btns.each(function(){
        //     var num=$(this).index();
        //     $(this).css({'left':posx[num],'top':posy[num]})
        // });
        
        // 마우스 오버 이벤트
        var over_event=$('.hive_imgs li');           

        $('.hive_five_cover > div').stop().hide();
        $('.hive_five, .hive_five_cover > div:first').stop().show(); 

        over_event.hover(function(){
            var eq_num=$(this).index();
        
            $('.hive_five_cover div').stop().hide();
            $('.hive_five').stop().hide();
            $('.hive_five_cover div').eq(eq_num).stop().fadeIn();
        },function(){
            $('.hive_five').stop().show();
        });    

        // 지도 영역    
        $('.map_google div, .center_img2 ul li, .right_text3 ul li').hide();
        $('.map_google div:first, .center_img2 ul li:first, .right_text3 ul li:first').show();   
        $('.left_home ul .B_light').click(function(e){            
            e.preventDefault();
            var map_tabs=$(this).index();   
            $('.map_google .sub_map, .center_img2 ul li, .right_text3 ul li').hide();  
            $('.map_google .sub_map').eq(map_tabs).show();             
            $('.center_img2 ul li').eq(map_tabs).show();              
            $('.right_text3 ul li').eq(map_tabs).show(); 
        });  
        

    });
// Ready END

