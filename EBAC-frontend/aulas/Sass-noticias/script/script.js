$(function(){
    
        $('.carousel').slick({
            infinite:true,
            slidesToShow: 2,
            dots:true,
            autoplay: true,
            speed:900,
            autoplaySpeed: 7000,
            responsive: [
                {
                    breakpoint:1260,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    

})