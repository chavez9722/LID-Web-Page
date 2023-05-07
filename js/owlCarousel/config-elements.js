const nextIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.14 137.35"><g id="bc3fdad9-e6cf-4696-9ece-b9e046aca453" data-name="Capa 2"><g id="a92c2d46-eefc-45fc-99c8-f32edfcda02a" data-name="OBJECTS"><path d="M1.49,137.35c-.38,0-.76-.47-1-1.39a12.9,12.9,0,0,1,0-6.7l19.1-60.59L.44,8.08a12.86,12.86,0,0,1,0-6.69C1-.46,2-.46,2.55,1.39L22.7,65.33a12.86,12.86,0,0,1,0,6.69L2.55,136C2.26,136.88,1.87,137.35,1.49,137.35Z"/></g></g></svg>'
const previousIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.14 137.35"><g id="a8bd7e2d-af83-4dec-a4e5-2f6b76d5657c" data-name="Capa 2"><g id="e048398c-2637-4d6e-8189-9ec7febee489" data-name="OBJECTS"><path d="M21.65,137.35c.38,0,.76-.47,1.05-1.39a12.9,12.9,0,0,0,0-6.7L3.6,68.67,22.7,8.08a12.86,12.86,0,0,0,0-6.69c-.58-1.85-1.52-1.85-2.11,0L.44,65.33A12.86,12.86,0,0,0,.44,72L20.59,136C20.88,136.88,21.27,137.35,21.65,137.35Z"/></g></g></svg>'

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