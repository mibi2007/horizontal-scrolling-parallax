const images = [...document.querySelectorAll('.img')];
let slider = document.querySelector('.slider');
let sliderWidth,
  imageWidth,
  current = 0,
  target = 0,
  ease = 0.05;

const assets = [
  'https://www.w3schools.com/howto/img_nature_wide.jpg',
  'https://www.w3schools.com/howto/img_snow_wide.jpg',
  'https://www.w3schools.com/howto/img_lights_wide.jpg',
  'https://www.w3schools.com/howto/img_mountains_wide.jpg',
];

images.forEach((image, index) => {
  image.style.backgroundImage = `url(${assets[index]})`;
});

function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}

function setTransform(el, transform) {
  el.style.transform = transform;
}

function init() {
  sliderWidth = slider.getBoundingClientRect().width;
  imageWidth = sliderWidth / images.length;
}
document.on;
init();

console.log(imageWidth);
