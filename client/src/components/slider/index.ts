export function handleSlider(images: string[]) {
  const slider = document.querySelector('.slider');
  const prevButton = document.querySelector<HTMLButtonElement>('#prev');
  const nextButton = document.querySelector<HTMLButtonElement>('#next');

  const updateSlider = (index: number) => {
    const image = createImage(images[index], index);
    image.setAttribute('src', images[index]);
    image.setAttribute('data-index', String(index));
    image.setAttribute('class', 'slider__image');
    image.setAttribute('active', 'true');

    const sliderItem = document.querySelector('.slider__item');
    sliderItem!.textContent = '';
    sliderItem!.appendChild(image);
  };

  prevButton!.addEventListener(
    'click',
    () => handlePrev(slider, updateSlider) && handleBullets()
  );
  nextButton!.addEventListener(
    'click',
    () => handleNext(slider, updateSlider) && handleBullets()
  );
}

function createImage(src: string, index: number) {
  const image = document.createElement('img');
  image.setAttribute('src', src);
  image.setAttribute('data-index', String(index));
  image.setAttribute('class', 'slider__image');
  image.setAttribute('active', 'true');

  return image;
}

function handleNext(
  slider: Element | null,
  handleUpdate: (index: number) => void
) {
  // @ts-ignore
  const active = Number(slider?.dataset.active);
  // @ts-ignore
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
  // @ts-ignore
    return (slider!.dataset.active = 0);
  }
  handleUpdate(active + 1);
  // @ts-ignore
  return (slider!.dataset.active = active + 1);
}

function handlePrev(
  slider: Element | null,
  handleUpdate: (index: number) => void
) {
  // @ts-ignore
  const active = Number(slider?.dataset.active);
  // @ts-ignore
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
  // @ts-ignore
    return (slider!.dataset.active = length - 1);
  }
  handleUpdate(active - 1);
  // @ts-ignore
  return (slider!.dataset.active = active - 1);
}

function handleBullets() {
  const slider = document.querySelector('.slider');
  // @ts-ignore
  const activeIndex = Number(slider?.dataset.active);
  // @ts-ignore
  const length = Number(slider?.dataset.length);

  const sliderBullet = document.querySelector('.slider__bullet');
  sliderBullet!.textContent = '';

  const bullets = Array.from({ length }, (_, index) => {
    const bullet = document.createElement('div');
    bullet.setAttribute('class', 'slider__bullet-item');
    bullet.setAttribute('data-index', String(index));
    if (index === activeIndex) {
      bullet.textContent = '●';
    } else {
      bullet.textContent = '○';
    }
    return bullet;
  });

  bullets.forEach((bullet) => {
    sliderBullet!.appendChild(bullet);
  });
}

export const slider = (images: string[]) => `
<div class="slider" data-active="0" data-length="${String(images.length)}">
  <div class="slider__container">
    <div class="slider__item">
      ${
        images?.length > 0 &&
        `  <img
        src="${images[0]}"
        data-index="0"
        class="slider__image"
        active="true"
        />`
      }
    </div>
  </div>
  <div class="slider__bullet">
  ${
    images?.length > 0 &&
    `  <img
    src="${images[0]}"
    data-index="0"
    class="slider__image"
    active="true"
    />`
  }
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
