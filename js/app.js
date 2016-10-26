(function() {
  var navLinks = $('nav ul li a'),
  navH = $('nav').height(),
  section = $('section'),
  documentEl = $(document);
  documentEl.on('scroll', function() {
    var currentScrollPos = documentEl.scrollTop();
    section.each(function() {
      var self = $(this);
      if ( self.offset().top < (currentScrollPos + navH) && (currentScrollPos + navH) < (self.offset().top + self.outerHeight())) {
        var targetClass = '.' + self.attr('class') + '-marker';
        navLinks.removeClass('active');
        $(targetClass).addClass('active');
      }
    });  
  });

  setTimeout(function() {
    $('.fly-in-text').removeClass('hidden');
  }, 500);
})();

