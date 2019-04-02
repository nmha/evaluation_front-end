//PARALLAXtest

// $('.parallax-window').parallax({imageSrc: '/img/about-img.jpg'});

//**HEADER - SMALL - BURGER-MENU-Action croix */
$('.burger-menu').click(function(){
    // console.log('hey');
    $(this).add('.burger-menu').toggleClass('actioncroix');
    $(this).add('.clique').toggleClass('actif');
    $(this).add('body').toggleClass("hidden");
})

//**HEADER - SMALL -STICKY bar*//


let stickyNav = $('.sh_2').offset().top;

function stickyFct() {
    let scrollTop = $(window).scrollTop();
    if (scrollTop > stickyNav) {
        $('.sh_2').addClass('sticky');
    } else {
        $('.sh_2').removeClass('sticky');
    }
}

$(window).scroll(function () {
    stickyFct();
    $(window).resize(function () {
        stickyNav = $('.sh_2').offset().top;
        stickyFct();
    });
});


//****************************//
//*** SWIPER*****************//
//**************************//
var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


//   deuxième swiper 

var swiper = new Swiper('.swiper-container2', {
    spaceBetween: 40,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination2',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
  });



  



 


  