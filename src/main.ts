import './style.css';
import { setupCounter } from './counter.ts';
import { clock, updateClock } from './components/clock/index.ts';
import { mouseTracker } from './components/mouseTracker/index.ts';

const header = `
  <header>
    ${clock}
  </header>
`;

const navigation = `
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item"><a class="navigation__link" href="/">Vinicius Skonicezny</a></li>
    </ul>
  </nav>
`;

const contentLeft = () => `
  <aside>
    <div class="mouseTracker">
      <div class="mouseTracker__item">
        <h4 class="mouseTracker__title">Mouse X Position(px)</h4>
        <div class="mouseTracker__item-x" id="mouseTracker__x">000</div>
      </div>
      <div class="mouseTracker__item">
        <h4 class="mouseTracker__title">Mouse Y Position(px)</h4>
        <div class="mouseTracker__item-y" id="mouseTracker__y">000</div>
      </div>
    </div>
  </aside>
`;

const contentRight = (images = ['/first.jpeg']) => `
  <aside>
    <div class="slider">
      <div class="slider__item">
        <img class="slider__image" src="${images[0]}" alt="First image of the slider"/>
      </div>
      <div class="slider__bullet">
        <span class="slider__bullet-item">º</span>
        <span class="slider__bullet-item">º</span>
        <span class="slider__bullet-item">º</span>
      </div>
    </div>
    <div class="slider__controls">
      <button class="slider__button slider__button--prev">Prev</button>
      <button class="slider__button slider__button--next">Next</button>
    </div>
  </aside>
`;

const main = `
  <main>
  ${contentLeft()}
    <div>
    <button class="list__button">Show List</button>
    </div>
  ${contentRight()}
  </main>
`;

const footer = `
  <footer>
    <a href="https://allari.com/" rel="noopener" target="_blank" >
      <img src="/logo.png" alt="Logo for the company Allari, the company name in black"/>
    </a>
  </footer>
`;

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${header}
  ${navigation}
  ${main}
  ${footer}
`;

updateClock();
mouseTracker();

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
