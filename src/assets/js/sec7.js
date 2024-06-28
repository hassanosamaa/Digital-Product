
import "slick-carousel"
import $ from 'jquery';

export const sec7 = () => {
    
    $('.slick').slick({
        autoplay: true,
        speed: 600,
        autoplaySpeed: 6000,
        infinite: true,
        // lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        // fade: true,
        // cssEase: 'linear',
       
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    });
    

}