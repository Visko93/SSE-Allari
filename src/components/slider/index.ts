type ImageProps = {
  src: string;
  index: number;
};

export function handleSlider(images: string[]) {
  const slider = document.querySelector('.slider');
  const prevButton = document.querySelector<HTMLButtonElement>('#prev');
  const nextButton = document.querySelector<HTMLButtonElement>('#next');

  const updateSlider = (index: number) => {
    const image = document.createElement('img');
    image.setAttribute('src', images[index]);
    image.setAttribute('data-index', String(index));
    image.setAttribute('class', 'slider__image');
    image.setAttribute('active', 'true');

    const sliderItem = document.querySelector('.slider__item');
    sliderItem!.replaceChild(image, sliderItem!.firstChild!);
  };

  prevButton!.addEventListener('click', () => handlePrev(slider, updateSlider));
  nextButton!.addEventListener('click', () => handleNext(slider, updateSlider));
}

function handleNext(
  slider: Element | null,
  handleUpdate: (index: number) => void
) {
  const active = Number(slider?.dataset.active);
  const length = Number(slider?.dataset.length);

  if (active === length - 1) {
    const sliderItems = document.querySelectorAll('.slider__image');
    sliderItems.forEach((item) => {
      const index = item.getAttribute('data-index');
      if (index === '0') {
        item.setAttribute('active', 'true');
      } else {
        item.setAttribute('active', 'false');
      }
    });
    handleUpdate(0);
    return (slider!.dataset.active = 0);
  }
  handleUpdate(active + 1);
  return (slider!.dataset.active = active + 1);
}

function handlePrev(
  slider: Element | null,
  handleUpdate: (index: number) => void
) {
  const active = Number(slider?.dataset.active);
  const length = Number(slider?.dataset.length);

  if (active === 0) {
    const sliderItems = document.querySelectorAll('.slider__image');
    sliderItems.forEach((item) => {
      const index = item.getAttribute('data-index');
      if (index === '0') {
        item.setAttribute('active', 'true');
      } else {
        item.setAttribute('active', 'false');
      }
    });
    handleUpdate((length - 1) as number);
    return (slider!.dataset.active = length - 1);
  }
  handleUpdate(active - 1);
  return (slider!.dataset.active = active - 1);
}

export const slider = (images: string[]) => `
<div class="slider" data-active="0" data-length="${String(images.length)}">
  <div class="slider__container">
    <div class="slider__item">
    </div>
  </div>
  <div class="slider__bullet">
    
  </div>
</div>
<div class="slider__controls">
  <button 
    class="slider__button" 
    id="prev"
  >
  <
  </button>
  <button 
    class="slider__button"
    id="next"
  >
  >
  </button>
</div>
`;
