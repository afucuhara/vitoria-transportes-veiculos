(function () {
  var carousel = document.querySelector('.gallery-carousel');
  if (!carousel) return;
  var slides = Array.from(carousel.querySelectorAll('.gallery-slide'));
  var dots = Array.from(carousel.querySelectorAll('.gallery-dot'));
  var previous = carousel.querySelector('.gallery-prev');
  var next = carousel.querySelector('.gallery-next');
  var active = Math.max(0, slides.findIndex(function (slide) { return slide.classList.contains('is-active'); }));
  var timer;

  function show(index) {
    active = (index + slides.length) % slides.length;
    slides.forEach(function (slide, position) { slide.classList.toggle('is-active', position === active); });
    dots.forEach(function (dot, position) {
      dot.classList.toggle('is-active', position === active);
      if (position === active) dot.setAttribute('aria-current', 'true');
      else dot.removeAttribute('aria-current');
    });
  }

  function start() {
    window.clearInterval(timer);
    timer = window.setInterval(function () { show(active + 1); }, 3000);
  }

  previous.addEventListener('click', function () { show(active - 1); start(); });
  next.addEventListener('click', function () { show(active + 1); start(); });
  dots.forEach(function (dot, index) { dot.addEventListener('click', function () { show(index); start(); }); });
  carousel.addEventListener('mouseenter', function () { window.clearInterval(timer); });
  carousel.addEventListener('mouseleave', start);
  carousel.addEventListener('focusin', function () { window.clearInterval(timer); });
  carousel.addEventListener('focusout', start);
  show(active);
  start();
}());
