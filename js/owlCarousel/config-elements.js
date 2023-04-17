const nextIcon = '<img class="owl-custom-arrow" src="assets/img/carousel/next.png" alt="right"></img>'
const previousIcon = '<img class="owl-custom-arrow" src="assets/img/carousel/previous.png" alt="left"></img>'

$('#success-stories').owlCarousel({
    loop:true,
    autoplay: true,
    autoplayHoverPause: true,
    margin:20,
    nav:true,
    navText: [
        previousIcon,
        nextIcon
    ],
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        768:{
            items:3
        },
        1024:{
            items:3
        }
    }
})

$('#testimonials').owlCarousel({
    loop:true,
    autoplay: true,
    autoplayHoverPause: true,
    margin:20,
    nav:true,
    navText: [
        previousIcon,
        nextIcon
    ],
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        768:{
            items:1
        },
        1024:{
            items:1
        }
    }
})

$('#team').owlCarousel({
    loop:true,
    autoplay: true,
    autoplayHoverPause: true,
    margin:20,
    nav:true,
    navText: [
        previousIcon,
        nextIcon
    ],
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        768:{
            items:2
        },
        1024:{
            items:3
        }
    }
})