import { formatTime } from './utils';

export const updateClock = () => {
  const clock = document.getElementById('clock');
  const time = new Date();
  const { hours, minutes, seconds } = formatTime(time);

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
