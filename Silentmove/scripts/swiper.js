var slider = new Swiper ('.gallery-slider', { //create swiper.js object for class gallery-slider
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    loopedSlides: 8, // match to number of pictures in the carousel
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var thumbs = new Swiper ('.gallery-thumbs', { //create swiper.js object for class gallery-thumbs
    slidesPerView: 'auto',
    spaceBetween: 15,
    centeredSlides: true,
    loop: true,
    slideToClickedSlide: true,
});

// connects both swiper objects so that changing the picture on one slider, changes it on the other.
slider.controller.control = thumbs; 
thumbs.controller.control = slider;
