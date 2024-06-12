//Основний модуль
import gulp from "gulp";

//Импорт путей
import { path } from "./gulp/config/path.js";

//Імпорт загальних плагінів
import { plugins } from "./gulp/config/plugins.js";

//Передаємо значення в глобальну перемінну
global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  path: path,
  gulp: gulp,
  plugins: plugins,
};
// Імпортуемо задачу
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { svgSprive } from "./gulp/tasks/svgSprive.js";
// функція слідкує за змінами
function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
}
export { svgSprive };
const mainTasks = gulp.parallel(copy, html, scss, js, images);
//Порядок сценариев віполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
//Експорт сценаріїв
export { dev };
export { build };
//виконання сценарію по замовчуванні
gulp.task("default", dev);
