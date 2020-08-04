
	 $(document).ready(function(){

$('.slider').bxSlider({
  mode: 'horizontal',
  auto: true,
  });
  //-------Scrool-------- 
  $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
    var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
    if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
      $(".menu__block_layer").removeClass("menu__block_active");
      
    }

  return false; // выключаем стандартное действие
});
      

$(".menu__btn").click(function menuToggle(e) {
  e.preventDefault();
  $(this).toggleClass("menu__btn_active");
  $('.menu__block_layer').toggleClass("menu__block_active");
  
});


// Настройки для WOW.js И Animate.css
$('h2').addClass('wow fadeInRight');
$('.services__table-block').addClass('wow fadeInLeft');
$('.menu__items').addClass('wow fadeInRightBig');
$('.blog__views').addClass('wow shake');

const wow = new WOW(
  {
    boxClass: 'wow', //
    animateClass: 'animated', //
    offset: 40, //
    mobile: true, //
    live: true, //
    callback: function(box){

    },
    scrollContainer: null
  }
);
wow.init();
// 
$(".tabs").on("click", function(){
  if(!$(this).hasClass('tabs_active')){
    $('.tabs__content').slideUp();
    $(this).siblings().slideDown();
    $('.tabs').removeClass('tabs_active')
    $(this).addClass('tabs_active')
  }
});
  




});