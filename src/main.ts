import './style.css';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.ts';

const header = `
  <header>
    <a href="https://vitejs.dev" target="_blank"/>
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
