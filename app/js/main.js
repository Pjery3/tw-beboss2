$(function(){

    $('.nav-menu__btn').on('click', function() {
        if (!$('.nav').hasClass('clicked')) { 
          $('.nav').addClass('clicked'); 
          console.log('First click');
        } else {
          $('.nav').removeClass('clicked');
          console.log('Second click');
        }
      });

})