document.addEventListener('DOMContentLoaded', function () {
  const el = document.querySelector('.animate-title');
  const str = el.innerHTML.trim().split("");

  // let concatStr = '';

  // for (let c of str) {
  //   c =  c.replace(' ', '&nbsp;');
  //   concatStr += `<span class="char">${c}</span>`;
  // }

  el.innerHTML =  str.reduce((acc, curr) => {
    curr = curr.replace(' ', '&nbsp;');
    return `${acc}<span class="char">${curr}</span>`;
  },"");
});

// const btn = document.querySelector('#btn');
// const h1 = document.querySelector('h1');

// function changeColor() {
//   // this.style.color = 'red';
//   h1.style.color = 'red';
//   // console.log(this);
// };

// function changeBgColor() {
//   h1.style.backgroundColor = 'green';
// }
// btn.addEventListener('click', changeColor);
// btn.addEventListener('click', changeBgColor);

// btn.removeEventListener('click', hello);

// const str = 'animation';
// const strArry = str.split('');

// function tag(accu, curr) {
//   console.log(accu);
//   return `${accu}<${curr}>`;
// }


// function reduce(arry, callback, defaultValue) {
//   let accu = defaultValue;

//   for (let i = 0; i < arry.length; i++){
//     let curr = arry[i];
//     callback(accu, curr);
//   }

//   return accu;
// }

// const result = reduce(strArry,tag, "");
// console.log(result);

// const array = [1, 2, 3, 4, 5];

// array.reduce(function (accu, curr) {
//   console.log(accu, curr);
//   // return accu * curr;
// }, 10);

// const str = 'animation';
// const strArray = str.split('');

// console.log(strArray);

// const result = strArray.reduce((accu, curr) => {
//   return   `${accu}<${curr}>`;
// },'');

// console.log(result);
