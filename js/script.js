$(document).ready(function() {
    $('.menu-burger__header').click(function() {
        $('.menu-burger__header').toggleClass('open-menu');
    });
});

$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        adaptiveHeight:true,
        slidesToShow:3,
        slidesToScroll:1,
        speed:1000,
        easing:'linear',
        infinite:true,
        autoplay:false,
        autoplaySpeed:500,
        pauseOnFocus:true,
        pauseOnHover:true,
        draggable:false,
        swipe:true,
        waitForAnimate:false,
        responsive:[
            {
                breakpoint:768,
                settings:{
                    slidesToShow:2
                }
            },
            {
                breakpoint:480,
                settings:{
                    slidesToShow:1
                }
            }
        ],
        mobileFirst:false,
        });
});

// $(document).ready(function(){
//     $('.slider_material').slick({
//         arrows:true,
//         adaptiveHeight:true,
//         slidesToShow:1,
//         slidesToScroll:1,
//         speed:1000,
//         easing:'linear',
//         infinite:true,
//         autoplay:false,
//         autoplaySpeed:500,
//         pauseOnFocus:true,
//         pauseOnHover:true,
//         draggable:false,
//         swipe:true,
//         waitForAnimate:false,
//         mobileFirst:false,
//         });
// });

// $('.single-item').slick();

$(document).ready(function(){
    $('.single-item').slick();
});
