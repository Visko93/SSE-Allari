import './style.css';
import { clock, updateClock } from './components/clock/index.ts';
import { mouseTracker } from './components/mouseTracker/index.ts';
import { handleSlider, slider } from './components/slider/index.ts';

const header = `
  <header>
    ${clock}
  </header>
`;

const navigation = `
  <nav class="navigation">
    <div class="navigation__item">
      <a class="navigation__link" href="/">
        Vinicius Skonicezny
      </a>
    </div>
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

const contentRight = (
  images = ['/first.jpeg', '/first.jpeg', '/first.jpeg']
) => `
  <aside>
    ${slider(images)}
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
handleSlider(['/first.jpeg', '/second.jpg', '/third.jpg']);
