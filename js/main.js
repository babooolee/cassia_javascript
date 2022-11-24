window.addEventListener('DOMContentLoaded', () => {

    const MS = new Swiper('.mainSlide', {
        loop: true,
        slideActiveClass: 'on',
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        on: {
            slideChangeTransitionEnd: function () {
                let num = this.realIndex; // 0,1,2;
                console.log(num);
                document.querySelector('.mainVisual .num strong').textContent = "0" + (num + 1);
            }
        }


    });

    const DOTS = document.querySelectorAll('.mainVisual .dots li');
    console.log(DOTS, DOTS.length);

    DOTS.forEach((el, idx) => {
        el.addEventListener('click', () => {
            console.log(idx);
            MS.slideTo(idx + 1, 600)
        })
    });

    const MS_LEFT_BTN = document.querySelector('.mainVisual .arrows button:first-child');
    const MS_RIGHT_BTN = document.querySelector('.mainVisual .arrows button:last-child');
    MS_LEFT_BTN.addEventListener('click', () => {
        MS.slidePrev();
    });
    MS_RIGHT_BTN.addEventListener('click', () => {
        MS.slideNext();
    });

    const TOP_BTN = document.querySelector('.toTop');
    TOP_BTN.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    });

    window.addEventListener('scroll', () => {
        let sct = window.scrollY;
        console.log(sct);
        sct > 1500
            ? TOP_BTN.classList.add('on')
            : TOP_BTN.classList.remove('on');
    })





})