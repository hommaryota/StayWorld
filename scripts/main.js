document.addEventListener('DOMContentLoaded', function () {
  const ta = new TextAnimation('.animate-title');
  const ta2 = new TextAnimation('.animate-title-2');
  setTimeout(() => {
    ta.animate();
    ta2.animate();
  }, 1000);

  // const el = document.querySelector('.animate-title');
  // const str = el.innerHTML.trim().split("");
  // const el2 = document.querySelector('.animate-title-2');
  // const str2 = el2.innerHTML.trim().split("");
  // let concatStr = '';

  // for (let c of str) {
  //   c =  c.replace(' ', '&nbsp;');
  //   concatStr += `<span class="char">${c}</span>`;
  // }

  // el.innerHTML =  str.reduce((acc, curr) => {
  //   curr = curr.replace(' ', '&nbsp;');
  //   return `${acc}<span class="char">${curr}</span>`;
  // }, "")
  // el2.inerHTML =  str2.reduce((acc, curr) => {
  //   curr= curr.replace(' ', '&nbsp;');
  //   retun `${acc}<span class="char">${curr}</span>`;
  // },"");
});

class TextAnimation {
  constructor(el) {
    this.el = document.querySelector(el);
    this.chars = this.el.innerHTML.trim().split("");
    this.el.innerHTML = this._splitText();
  }
  _splitText() {
    return this.chars.reduce((acc, curr) => {
      curr = curr.replace(' ', '&nbsp;');
      return `${acc}<span class="char">${curr}</span>`;
    }, "");
  }
  animate() {
    this.el.classList.toggle('inView');
  }
}
// const ta = new TextAnimation('.animate-title');
// const ta2 = new TextAnimation('.animate-title2');
// ta.log();
