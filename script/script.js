$(document).ready(function()
{
    /* ========================== NOTICE ========================== */
    let getNoticeCheck = sessionStorage.getItem('noticeCheck');
    let noticeCheck = false; // 기본값을 false로 설정

    // 세션스토리지에 값이 없거나(Null), false가 저장되어있으면 다음 실행
    if (!getNoticeCheck || getNoticeCheck == 'false') {
        noticeCheck = false; //세션스토리지에서 noticeCheck값을 false로 저장
        sessionStorage.setItem('noticeCheck', noticeCheck);
    } else {
        //그 외의 경우 공지사항체크를 한 것으로 간주하여 noticeCheck의 값을 true로 변경
        noticeCheck = true;
        sessionStorage.setItem('noticeCheck', noticeCheck);
    }

    // 스크롤 방지 & 맨위로 이동
    function preventScroll(event) {
        window.scrollTo(0, 0); // 맨 위로 스크롤 이동시킴
        event.preventDefault(); // 스크롤방지
    }

    //공지사항 확인을 안했을경우
    if (!noticeCheck) {
        //스크롤 방지 & 공지사항 보임
        document.addEventListener('scroll', preventScroll);
        $('#notice').css('display', 'block');
    }

    //닫기 버튼 클릭시 공지사항 사라지고, 다른 함수들 작동 시작
    $('.notice-close').click(function() {
        //닫기버튼 누르면 공지사항 사라지고, 다시 스크롤이 됨
        $('#notice').css('display', 'none');
        document.removeEventListener('scroll', preventScroll);

        //공지사항을 체크한 것으로 간주하고 noticeCheck값을 true로 변경해줌
        noticeCheck = true;
        //세션스토리지 값도 true로 변경하여 다음에 공지사항이 안나오도록 함.
        sessionStorage.setItem('noticeCheck', noticeCheck);
    })
    /* =========================================================== */


    /* Swiper 모음 */
    //메인슬라이드 스와이퍼
    let slideSwiper = new Swiper('.slide-swiper',
    {
        direction : 'horizontal',
        loop: true,
        autoplay : { delay: 3000 },
        speed: 300,
        pagination :
        {
            el: '.slide-pagination',
            type: 'progressbar',
        },
        navigation :
        {
            nextEl: '.slide-next',
            prevEl: '.slide-prev',
        },
        slidesPerView: 1,  
        slidesPerGroup : 1

      });

    //비지니스 스와이퍼
    let businessSwiper = new Swiper('.business-swiper',
    {
        direction : 'horizontal',
        loop: true,
        autoplay : { delay: 4000 },
        speed: 300,
        breakpoints:
        {
            320:
            {
                spaceBetween: 20,
                slidesPerView: 1,  
                slidesPerGroup : 1
            },
            600:
            {
                spaceBetween: 20,
                slidesPerView: 2,  
                slidesPerGroup : 2
            },
            1024:
            {
                spaceBetween: 20,
                slidesPerView : 1,
                slidesPerGroup : 1
            }
        }
    });

    //뉴스룸 스와이퍼
    let newsroomSwiper = new Swiper('.newsroom-swiper',
    {
        direction : 'horizontal',
        loop: true,
        autoplay : { delay: 3000 },
        speed: 300,
        breakpoints :
        {
            320:
            {
                spaceBetween: 20,
                slidesPerView: 1,  
                slidesPerGroup : 1
            },
            600:
            {
                spaceBetween: 20,
                slidesPerView: 2,  
                slidesPerGroup : 2
            },
            1024:
            {
                spaceBetween: 20,
                slidesPerView : 4,
                slidesPerGroup : 4
            }
        },
    });

    //채용공고 스와이퍼
    let recruitmentSwiper = new Swiper('.recruitment-swiper',
    {
        direction : 'horizontal',
        loop: false,
        breakpoints:
        {
            320:
            {
                spaceBetween: 10,
                slidesPerView: 1,  
                slidesPerGroup : 1,
            },
            600:
            {
                spaceBetween: 20,
                slidesPerView: 2,  
                slidesPerGroup : 2
            },
            1024:
            {
                spaceBetween : 20, 
                slidesPerView : 3, 
                slidesPerGroup : 3,
            }
        },
        navigation :
        {
            nextEl: '.recruitment-next',
            prevEl: '.recruitment-prev',
        }
    });

    /* ================================= */

    $(window).resize(function() {
        if($(window).width() >= 1024)
        {
            resetPcNav()
        }
        else if ($(window).width() < 1024)
        {
            resetMobileNav()
        }
    });

    //이미지 경로 저장
    let whiteSrc ='images/logo-white.png';
    let colorSrc = 'images/logo-color.png';
    let whiteMenuSrc = 'url("images/ico-menu.png")'
    let colorMenuSrc = 'url("images/ico-menu-color.png")'

    // nav 기본값, bg, sub-menu등 숨김
    resetNav()
    function resetNav()
    {
        $('.pc-header .pc-bg').hide();
        $('.pc-header .sub-menu').hide();
        $('.mobile-header nav').hide();
        $('.mobile-header .sub-menu').hide();
        $('.mobile-bg ').hide();
    }


    // pc nav 리셋
    function resetPcNav()
    {   
        $('.pc-header .pc-bg').hide();
        $('.pc-header .sub-menu').hide();
        $('.logo-img').attr('src', whiteSrc);
    }

    // mobile nav 리셋
    function resetMobileNav()
    {
        //이미지 흰색으로 변경
        $('.logo-img').attr('src', whiteSrc);
        $('.toggleMenu').css('background-image', whiteMenuSrc);
        //mobile-bg 숨김
        $('.mobile-bg ').hide();
        //nav 숨김
        $('.mobile-header nav').stop().slideUp();
        $('.mobile-header .sub-menu').hide();
        //class 삭제
        $('.mobile-header').removeClass('active');
        $('body').removeClass('stop-scroll');
        $('.gnb-menu li.active').removeClass('active');
        checkClick = true;
    }


    //pc nav
    // 마우스 및 터치 이벤트 모두 처리
    $('.pc-header').on('mouseenter click touchstart', function()
    {
        $('.pc-header .pc-bg').stop().slideDown(200);
        $('.pc-header .sub-menu').stop().slideDown(200);
        $('.logo-img').attr('src', colorSrc); // 컬러 로고로 바꿔줌
    });

    $('.pc-header').on('mouseleave touchend', function()
    {
        $('.pc-header .sub-menu').stop().slideUp(100);
        $('.pc-header .pc-bg').stop().slideUp(100); 
        $('.logo-img').attr('src', whiteSrc); // 흰색 로고로 바꿔줌
    });

    // 모바일,태블릿 nav
    let checkClick = true; //toggle상태를 확인하기 위해서 사용
    $('.toggleMenu').click(function()
    {
        $('.gnb-menu li.active').children('.sub-menu').slideUp();
        $('.gnb-menu li.active').removeClass('active');
        $('.mobile-header nav').stop().slideToggle();
        $('.mobile-header').toggleClass('active');
        $('body').toggleClass('stop-scroll');
        if(checkClick)
        {
            //true면, logo와 icon 이미지 컬러로 바꿔주고, checkClick값 false로 바꿈
            $('.logo-img').attr('src', colorSrc); 
            $('.toggleMenu').css('background-image', colorMenuSrc);
            $('.mobile-bg ').show();
            checkClick = false;
        }
        else
        {
             //false면, logo와 icon 이미지 화이트로 바꿔주고, checkClick값 true로 바꿈
            $('.logo-img').attr('src', whiteSrc);
            $('.toggleMenu').css('background-image', whiteMenuSrc);
            $('.mobile-bg ').hide();
            checkClick = true;
        }
    })

    //.mobile-bg영역 클릭시 nav리셋됨(사라짐)
    $('.mobile-bg').click(function()
    {
        resetMobileNav();
        checkClick = true;
    })

    $('.mobile-header .gnb-menu li').click(function()
    {
        $('.gnb-menu li.active').removeClass('active');
        $(this).addClass('active');
        $(this).siblings('li').children('.sub-menu').slideUp();
        $(this).children('.sub-menu').slideToggle();
    })
})