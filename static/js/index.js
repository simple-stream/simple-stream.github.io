window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
    });

    var options = {
      slidesToScroll: 1,
      slidesToShow: 3,
      loop: true,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 3000,
    }

    // Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    bulmaSlider.attach();

    // ── Figure Carousel ──
    (function() {
      var track = document.querySelector('.fig-slides');
      var dots  = document.querySelectorAll('.fig-dot');
      if (!track) return;

      var total = document.querySelectorAll('.fig-slide').length;
      var current = 0;
      var timer;

      function goTo(idx) {
        dots[current].classList.remove('active');
        current = (idx % total + total) % total;
        track.style.transform = 'translateX(-' + (current * 100) + '%)';
        dots[current].classList.add('active');
      }

      function next() { goTo(current + 1); }
      function prev() { goTo(current - 1); }

      function startAuto() { timer = setInterval(next, 5000); }
      function stopAuto()  { clearInterval(timer); }

      document.querySelector('.fig-next').addEventListener('click', function() { stopAuto(); next(); startAuto(); });
      document.querySelector('.fig-prev').addEventListener('click', function() { stopAuto(); prev(); startAuto(); });

      dots.forEach(function(dot) {
        dot.addEventListener('click', function() {
          stopAuto();
          goTo(parseInt(this.dataset.index));
          startAuto();
        });
      });

      var carousel = document.querySelector('.fig-carousel');
      carousel.addEventListener('mouseenter', stopAuto);
      carousel.addEventListener('mouseleave', startAuto);

      startAuto();
    })();
})
