
const titleElm = document.querySelector('.title');
titleElm.innerHTML = titleElm.innerText.split('').map(x => `<span>${x}</span>`).join('');

// const titleText = titleElm.innerText;
// const titleArr = titleText.split('');
// const titleMap = titleArr.map((x) => {
//   return `<span>${x}</span>`;
// });
// const titleFinal = titleMap.join('');
// console.log(titleFinal);

const tagElm = document.querySelector('.tagline');
tagElm.innerHTML = tagElm.innerText.split('').map(x => `<span>${x}</span>`).join('');

const timeline = new TimelineMax({repeat: -1, repeatDelay: 4});

timeline
  .from('.imac', 1.5, {scale: 0, transformOrigin: '50% 90%', ease: "elastic.out(1, 0.5)"})
  .staggerFrom('.title span', 0.4, {y: -20, opacity: 0, ease: "elastic.out(1, 0.5)"}, 0.1, 0.5)
  .staggerFrom('.title span', 0.4, {color: 'blue'}, 0.1, 0.6)
  .set('.animation', {delay: 0.5})
  .from('hr', 0.5, {width: 0, opacity: 0})
  .staggerFrom('.tagline span', 0.4, {x: 800, opacity: 0}, 0.1)
  .from('.coffee', 0.7, {y: -500, opacity: 0, ease: "bounce.out"})
;