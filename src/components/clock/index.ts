import { formatTime } from './utils';

export const updateClock = () => {
  const clock = document.getElementById('clock');
  const time = new Date();
  const { hours, minutes, seconds } = formatTime(time);

  const currentSecondsUnit = clock?.querySelector(
    '#seconds .clock__time-unit'
  )?.textContent;

  clock!.innerHTML = `
    <div class="clock" id="clock">
      <div class="clock__time" id="hours">
        <span class="clock__time-decimal">${hours[0]}</span>
        <span class="clock__time-unit">${hours[1]}</span>
      </div>
      <div class="clock__time" id="minutes">
        <span class="clock__time-decimal">${minutes[0]}</span>
        <span class="clock__time-unit">${minutes[1]}</span>
      </div>
      <div class="clock__time" id="seconds">
        <span class="clock__time-decimal">${seconds[0]}</span>
        <span class="clock__time-unit">${seconds[1]}</span>
      </div>
    </div>
  `;
  // if (currentSecondsUnit !== seconds[1]) {
  //   const secondsEl = document.getElementById('seconds');
  //   const prevElement = document.querySelector('#seconds .clock__time-unit');

  //   const nextElement = document.createElement('span');
  //   nextElement.classList.add('clock__time-unit');
  //   nextElement.textContent = seconds[1];
  //   nextElement.style.position = 'absolute';

  //   prevElement?.appendChild(prevElement);

  //   prevElement?.classList.add('moveOut');
  //   nextElement?.classList.add('moveIn');

  //   console.debug(currentSecondsUnit, seconds[1]);
  //   setTimeout(() => {
  //     nextElement?.classList.remove('moveOut');
  //     prevElement?.classList.remove('moveIn');
  //   }, 800);
  // }
  const id = setTimeout(updateClock, 1000);

  return () => clearTimeout(id);
};

export const clock = `
  <div class="clock" id="clock">
    <div class="clock__time" id="hours">
      <span class="clock__time-decimal">0</span>
      <span class="clock__time-unit">0</span>
    </div>
    <div class="clock__time" id="minutes">
      <span class="clock__time-decimal">0</span>
      <span class="clock__time-unit">0</span>
    </div>
    <div class="clock__time" id="seconds">
      <span class="clock__time-decimal">0</span>
      <span class="clock__time-unit">0</span>
    </div>
  </div>
`;
