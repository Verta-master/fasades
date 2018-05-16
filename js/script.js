//Mobile menu
$('.menu__btn').click(function(e) {
  e.stopPropagation();
  $('.menu').toggleClass('menu--opened');
  $('.menu__list').slideToggle();
})

$('.menu__subbtn').click(function(e) {
  e.stopPropagation();
  $(this).next().slideToggle();
  $(this).toggleClass('menu__subbtn--up');
})

$('.search__btn').click(function(e) {
  e.stopPropagation();
  $('.search__form').slideToggle();
})

//Hide popups on escape and click outside
if (window.innerWidth < 1200) {
  $("body").click(function(){
    $('.menu__list').slideUp();
    $('.menu').removeClass('menu--opened');
    $('.search__form').slideUp();
  })

  $("body").keydown(function(e) {
    if (e.keyCode == 27) {
      $('.menu__list').slideUp();
      $('.menu').removeClass('menu--opened');
      $('.search__form').slideUp();
    }
  })
}
