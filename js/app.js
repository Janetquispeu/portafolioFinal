function hideLoader(){
  document.getElementById('floatingBarsG').style.display="none";
}
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
})();

$(".tl").textillate({
  in:{effect:'flipInY',delay:100},
  out:{effect:'swing',shuffle:true,delay:1},
  loop:true
});

$(".tlt").textillate({
  in:{effect:'flipInX',delay:20},
  out:{effect:'rollOut',sync:true,delay:1},
  loop:false
});

$(".aboutmeh1").textillate({
  in:{effect:'swing',delay:20},
  out:{effect:'rollOut',sync:true,delay:1},
  loop:true
});

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
  stats.begin();
  stats.end();
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
