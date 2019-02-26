//**HEADER - SMALL - BURGER-MENU-Action croix */
$('.burger-menu').click(function(){
    // console.log('hey');
    $(this).add('.burger-menu').toggleClass('actioncroix');
    $(this).add('.clique').toggleClass('actif');
    $(this).add('body').toggleClass("hidden");
})

//**HEADER - SMALL -STICKY bar*//

let hauteurHeader=$('header').outerHeight();
$(window).scroll(function(){
    let scrollActuel=$(window).scrollTop();
    if(scrollActuel>hauteurHeader){
        $('.sh_2').addClass('sticky');
    }else{
        $('.sh_2').removeClass('sticky');
    }    
});


//****************************//
//*** SWIPER************** **//
//**************************//
var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    pagination: {
        el: '.swiper-pagination',
      },

    
  })