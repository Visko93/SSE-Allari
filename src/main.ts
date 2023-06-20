import './style.css';
import { setupCounter } from './counter.ts';
import { clock, updateClock } from './components/clock/index.ts';

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

const contentLeft = `
  <aside>
    <div>
    asd
    </div>
  </aside>
`;

const contentRight = `
  <aside>
    <div>
    asd
    </div>
  </aside>
`;

const main = `
  <main>
  ${contentLeft}
    <div>
    <button class="list__button">Show List</button>
    </div>
  ${contentRight}
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

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
