document.addEventListener('DOMContentLoaded', () => {
  const navLinks = $('.nav-item');
  $( ".nav-item" ).on( "click", function() {
    navLinks.removeClass('active');
    $(this).addClass('active')
  } );
});