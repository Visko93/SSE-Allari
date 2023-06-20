import './style.css';
import { setupCounter } from './counter.ts';

const header = `
  <header>
    <div class="clock">
      <div class="clock__time">10</div>
      <div class="clock__time">14</div>
      <div class="clock__time">09</div>
    </div>
  </header>
`;

const navigation = `
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item"><a class="navigation__link" href="/">Vinicius Skonicezny</a></li>
    </ul>
  </nav>
`;

const aside = `
  <aside>
    <div>
    </div>
  </aside>
`;

const main = `
  <main>
    <div>
    </div>
  </main>
`;

const footer = `
  <footer>
  </footer>
`;

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${header}
  ${navigation}
  ${aside}
  ${main}
  ${footer}
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
