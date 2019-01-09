$(document).ready(function () {


  let hamburger = $('#hamburger-icon');
  hamburger.click(function () {
    hamburger.toggleClass('active');
    $('#cd-main-content').toggleClass('move-out');
    $('#main-nav').toggleClass('is-visible');
    $('.cd-shadow-layer').toggleClass('is-visible');

    return false;
  });



  $('.cd-menu-trigger').on('click', function (event) {
    event.preventDefault();
    $('#cd-main-content').addClass('move-out');
    $('#main-nav').addClass('is-visible');
    $('.cd-shadow-layer').addClass('is-visible');
  });
  //close menu
  $('.cd-close-menu, .main-nav--link').on('click', function (event) {
    $('#cd-main-content').removeClass('move-out');
    $('#main-nav').removeClass('is-visible');
    $('.cd-shadow-layer').removeClass('is-visible');
  });

  //clipped image - blur effect
  set_clip_property();
  $(window).on('resize', function () {
    set_clip_property();
  });

  function set_clip_property() {
    var $header_height = $('.cd-header').height(),
      $window_height = $(window).height(),
      $header_top = $window_height - $header_height,
      $window_width = $(window).width();
    $('.cd-blurred-bg').css('clip', 'rect(' + $header_top + 'px, ' + $window_width + 'px, ' + $window_height + 'px, 0px)');
  }

});