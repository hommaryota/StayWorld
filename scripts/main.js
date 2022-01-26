document.addEventListener("DOMContentLoaded", function () {
  const hero = new HeroSlider(".swiper-container");
  hero.start();

  const cb = function (el, isIntersecting) {
    if (isIntersecting) {
      const ta = new TweenTextAnimation(el);
      ta.animate();
    }
  };

  const so = new ScrollObserver(".tween-animate-title", cb);

  const _inViewAnimation = function (el, inView) {
    if (inView) {
      el.classList.add("inView");
    } else {
      el.classList.remove("inView");
    }
  };

  const so2 = new ScrollObserver(".cover-slide", _inViewAnimation);
});
