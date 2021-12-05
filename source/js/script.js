const headerElement = document.querySelector('.page-header');
const headerNavElement = document.querySelector('.page-header__main-nav');
const headerButton = document.querySelector('.page-header__toogle');
const sliderImageFat = document.querySelector('.slider__image-wrapper--fat');
const sliderImageSlim = document.querySelector('.slider__image-wrapper--slim');
const sliderButtonBefore = document.querySelector('.slider__button--before');
const sliderButtonAfter = document.querySelector('.slider__button--after');


headerButton.addEventListener('click', () => {
  headerNavElement.classList.toggle('page-header__main-nav--opened');
  headerNavElement.classList.toggle('page-header__main-nav--closed');

  if (headerNavElement.classList.contains('page-header__main-nav--opened')) {
    headerElement.classList.add('page-header--opened')
  } else {
    headerElement.classList.remove('page-header--opened');
  }
})

sliderButtonBefore.addEventListener('click', () => {
  if (sliderImageFat.classList.contains('slider__image-wrapper--active')) {
    return
  }

  sliderImageSlim.classList.remove('slider__image-wrapper--active');
  sliderImageFat.classList.add('slider__image-wrapper--active');
})

sliderButtonAfter.addEventListener('click', () => {
  if (sliderImageSlim.classList.contains('slider__image-wrapper--active')) {
    return
  }

  sliderImageFat.classList.remove('slider__image-wrapper--active');
  sliderImageSlim.classList.add('slider__image-wrapper--active');
})
