// import fs from "fs";
// import fonter from "gulp-fonter";
// import ttf2woff2 from "gulp-ttf2woff2";

// export const otfTottf = () => {
//   //назва файлів шрифта
//   return (
//     app.gulp
//       .src(`${app.path.srcFolder}/fonts/*.otf`, {})
//       .pipe(
//         app.plugins.plumber(
//           app.plugins.notify.onError({
//             title: "FONTS",
//             message: "Error: <%= error.message %>",
//           })
//         )
//       )
//       //конвертуємо в .ttf
//       .pipe(
//         fonter({
//           formats: ["ttf"],
//         })
//       )
//       //вивантажуєм
//       .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
//   );
// };

// export const ttfToWoff = () => {
//   return (
//     app.gulp
//       .src(`${app.path.srcFolder}/fonts/*.ttf`, {})
//       .pipe(
//         app.plugins.plumber(
//           app.plugins.notify.onError({
//             title: "FONTS",
//             message: "Error: <%= error.message %>",
//           })
//         )
//       )
//       .pipe(
//         fonter({
//           formats: ["woff"],
//         })
//       )
//       .pipe(app.gulp.dest(`${app.path.build.fonts}`))
//       .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
//       // .pipe(ttf2woff2()) конвертуємо в .woff2
//       //вивантажуємо в папку с результатом
//       .pipe(app.gulp.dest(`${app.path.build.fonts}`))
//   );
// };
// export const fontsStyle =()=>{
//     //файл стилей підключення шрифтів
//     let fontsFile = `${app.path.srcFolder}/scss/fonts.scss`;
//     //перефіряємо істує файл
//     fs.readdir(app.path.build.fonts,function(err,fontsFiles){
//         if(fontsFiles){
//             if(!fs.existsSync(fontsFile)){
//                 fs.writeFile(fontsFile,'',cb);
//                 let newFileOnly;
//                 for(var i = 0; i<fontsFiles.length;i++){
//                     let fontFileName = fontsFiles[i].split('.'[0]);
//                     if(newFileOnly !== fontFileName){
//                         let fontName = fontFileName.split("."[0]?fontFileName.split('.')[0]:fontFileName)
//                         let fonWeight = fontFileName.split("."[1]?fontFileName.split('.')[1]:fontFileName)
//                         if(fonWeight.toLowerCase()==="thin"){
//                             fonWeight=100;
//                         }
//                         else if (fonWeight.toLowerCase()==="extralight"){
//                             fonWeight=200;
//                         }else if (fonWeight.toLowerCase()==="light"){
//                             fonWeight=300;
//                         }else if (fonWeight.toLowerCase()==="medium"){
//                             fonWeight=500;
//                         }else if (fonWeight.toLowerCase()==="semibold"){
//                             fonWeight=600;
//                         }else if (fonWeight.toLowerCase()==="bold"){
//                             fonWeight=700;
//                         }else if (fonWeight.toLowerCase()==="extrabold"||fonWeight.toLowerCase()==="heavy"){
//                             fonWeight=800;
//                         }else if (fonWeight.toLowerCase()==="black"){
//                             fonWeight=900;
//                         }else {
//                             fonWeight=400;
//                         }
//                         fs.appendFiles(fontsFile,
//                            `@font-face{\n\tfont-family:${fontName};\n\tfont-display:swap;\n\tsrc:url("../fonts/${font}")}`
//     )}
//                 }
//             }else{
//                 console.log("файл scss/fonts.scss вже існує");
//             }
//         }
//     })

// }
