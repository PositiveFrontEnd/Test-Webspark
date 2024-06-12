import replace from "gulp-replace"; //пошук і заміна помилок
import plumber from "gulp-plumber"; // Обробка помилок
import notify from "gulp-notify"; // Підказки (смс)
import browsersync from "browser-sync"; // Локальний сервер
import newer from "gulp-newer"; // Перевірка оновлення
import ifPlugin from "gulp-if"; //Умовне отвлетлениє
//Єкспортуємо обект
export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browsersync: browsersync,
  newer: newer,
  if: ifPlugin,
};
