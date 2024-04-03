

$(document).ready(function()
{
    let slideSwiper = new Swiper('.slide-swiper',
    {
        direction : 'horizontal',
        loop: true,
        autoplay : {
            delay: 3000
        },
        speed: 300,
        pagination : {
            el: '.swiper-pagination',
            type: 'bullets'
        }

      });

    let businessSwiper = new Swiper('.business-swiper',
    {
        direction : 'horizontal',
        loop: true,
        autoplay : {
            delay: 3000
        },
        speed: 300,
        pagination : {
            el: '.tab-pagination',
            type: 'bullets'
        },
        breakpoints: {
            320: {
                //브라우저가 768보다 클 때
                spaceBetween: 20,
                slidesPerView: 1,  
                slidesPerGroup : 1
            },
            600: {
                //브라우저가 768보다 클 때
                spaceBetween: 20,
                slidesPerView: 2,  
                slidesPerGroup : 2
            },
            1024: {
                spaceBetween: 20,
                slidesPerView : 1,
                slidesPerGroup : 1
            }
        }
    });

    let newsroomSwiper = new Swiper('.newsroom-swiper',
    {
        direction : 'horizontal',
        loop: true,
        autoplay : {
            delay: 3000
        },
        breakpoints : {
            320: {
                //브라우저가 768보다 클 때
                spaceBetween: 20,
                slidesPerView: 1,  
                slidesPerGroup : 1
            },
            600: {
                //브라우저가 768보다 클 때
                spaceBetween: 20,
                slidesPerView: 2,  
                slidesPerGroup : 2
            },
            1024: {
                spaceBetween: 20,
                slidesPerView : 4,
                slidesPerGroup : 4
            }
        }

    });

    let recruitmentSwiper = new Swiper('.recruitment-swiper',
        {
            direction : 'horizontal',
            loop: true,
            autoplay : {
                delay: 3000
            },
            speed: 300,
            loopFillGroupWithBlank : true,
            breakpoints: {
                320: {
                    //브라우저가 768보다 클 때
                    spaceBetween: 10,
                    slidesPerView: 1,  
                    slidesPerGroup : 1,
                },
                600: {
                    spaceBetween: 20,
                    slidesPerView: 2,  
                    slidesPerGroup : 2
                },
                1024: {
                    spaceBetween : 20, // 슬라이드간 간격
                    slidesPerView : 3, // 동시에 보여줄 슬라이드 갯수
                    slidesPerGroup : 2,
                }
            }
        });

   /*  $(window).resize(function(){ 
            setTimeout(()=>{
                console.log('resize!');

                if (window.innerWidth < 1024 && 768 <= window.innerWidth)
                {
                    alert("태블릿");

                    businessSwiper = new Swiper('.business-swiper',
                    {
                        spaceBetween: 20,
                        slidesPerView : 2,
                        slidesPerGroup : 2
                    });

                    recruitmentSwiper = new Swiper('.recruitment-swiper',
                    {
                        slidesPerView : 2, // 동시에 보여줄 슬라이드 갯수
                        spaceBetween : 20, // 슬라이드간 간격
                        slidesPerGroup : 2,
                        loopFillGroupWithBlank : true
                    });
                   
                }

            }, 100)
        }).resize(); 
 */

    $('.pc-header .pc-bg').hide();
    $('.pc-header .sub-menu').hide();
    $('.pc-header').mouseenter(function()
    {
        $('.pc-header .pc-bg').slideDown();
        $('.pc-header .sub-menu').slideDown();
    })


    $('.mobile-header nav').hide();
    $('.pc-header').mouseleave(function()
    {
        $('.pc-header .sub-menu').slideUp();
        $('.pc-header .pc-bg').slideUp();
    
    })

    
    $('.mobile-header .sub-menu').hide();
    $('.toggleMenu').click(function()
    {
        $('nav').slideToggle();
        $('.mobile-header').toggleClass('active');
    })

    $('.gnb-menu li').click(function(){
        $('.gnb-menu li.active').removeClass('active');
        $(this).addClass('active');
        $(this).siblings('li').children('.sub-menu').slideUp();
        $(this).children('.sub-menu').slideToggle();
    })
})