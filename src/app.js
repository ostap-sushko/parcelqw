import { success, info, error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/mobile/dist/PNotifyMobile.css';

defaultModules.set(PNotifyMobile, {});

const keyEl = document.querySelector('.text');
const newGameBtn = document.querySelector('.btn');

const keys = ['a', 's', 'd', 'f', 'j', 'k', 'l', 'q', 'w', 'e'];
let currentKeyIndex = 0;

keyEl.textContent = keys[currentKeyIndex];

window.addEventListener('keydown', event => {
  const pressedKey = event.key.toLowerCase();
  const currentKey = keys[currentKeyIndex];

  if (pressedKey === currentKey) {
    currentKeyIndex += 1;

    if (currentKeyIndex === keys.length) {
      success({
        text: '🎉 Вітаю! Ти натиснув усі правильні клавіші!',
      });
      return;
    }

    keyEl.textContent = keys[currentKeyIndex];

    success({
      text: `✅ Правильно! Наступна клавіша: ${keys[currentKeyIndex]}`,
    });
  } else {
    error({
      text: `❌ Помилка! Потрібна клавіша "${currentKey}"`,
    });
  }
});

window.addEventListener('keypress', event => {
  event.preventDefault();
});

newGameBtn.addEventListener('click', () => {
  currentKeyIndex = 0;
  keyEl.textContent = keys[currentKeyIndex];

  info({
    text: '🔄 Нова гра розпочалась! Натисни правильну клавішу',
  });
});
