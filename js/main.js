window.addEventListener('DOMContentLoaded', () => {

    const MS = new Swiper('.mainSlide', {
        loop: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    })

})