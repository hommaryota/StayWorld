document.addEventListener("DOMContentLoaded", function () {
  const main = new Main();
});

class Main {
  constructor() {
    this.header = document.querySelector(".header");
    this._observers = [];
    this._init();
  }

  _init() {
    new MobileMenu();
    this.hero = new HeroSlider(".swiper-container");
    this._scrollInit();
  }

  _inViewAnimation(el, inView) {
    if (inView) {
      el.classList.add("inView");
    } else {
      el.classList.remove("inView");
    }
  }

  _navAnimation(el, inView) {
    if (inView) {
      this.header.classList.remove("triggered");
    } else {
      this.header.classList.add("triggered");
    }
  }

  _textAnimation(el, isIntersecting) {
    if (isIntersecting) {
      const ta = new TweenTextAnimation(el);
      ta.animate();
    }
  }

  _toggleSlideAnimation(el, inView) {
    if (inView) {
      this.hero.start();
    } else {
      this.hero.stop();
    }
  }

  _scrollInit() {
    this._observers.push(
      new ScrollObserver(".nav-trigger", this._navAnimation.bind(this), {
        once: false,
      })
    );
    this._observers.push(
      new ScrollObserver(".cover-slide", this._inViewAnimation)
    );
    new ScrollObserver(".tween-animate-title", this._textAnimation);
    new ScrollObserver(
      ".swiper-container",
      this._toggleSlideAnimation.bind(this),
      { once: false }
    );
    // hero.start();
  }
}
