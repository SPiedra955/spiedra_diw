const { series, src, dest, watch } = require("gulp");
const limpiarCSS = require("gulp-clean-css");
const uglyJS = require("gulp-uglyfly");
const sass = require("gulp-sass")(require("sass"));
const concatCSS = require("gulp-concat-css");
const concatFiles = require("gulp-concat");

function watcher() {
  watch("src/scss/*.scss", series(  compilarSCSS,
    minimizarCSS,
    uglyflyJS,
    conCSS,
    concatJS,));
  watch;
}

function compilarSCSS() {
  return src("src/scss/slides.scss").pipe(sass()).pipe(dest("src/css"));
}

// Compilar JS
function uglyflyJS() {
  return src("src/js/*.js").pipe(uglyJS()).pipe(dest("dist/js/"));
}

function minimizarCSS() {
  return src("src/css/*.css") //Cual es el documento
    .pipe(limpiarCSS())
    .pipe(dest("dist/css/")); //Donde lo mandamos
}

function conCSS() {
  return src("dist/css/*.css")
    .pipe(concatCSS("all.css"))
    .pipe(dest("dist/css"));
}

function concatJS() {
  return src("dist/css/*.css")
    .pipe(concatFiles("all.js"))
    .pipe(dest("dist/js"));
}

// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function clean(cb) {
  // body omitted
  cb();
}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function build(cb) {
  // body omitted
  cb();
}




exports.build = build;
exports.slides = series(
  compilarSCSS,
  minimizarCSS,
  uglyflyJS,
  conCSS,
  concatJS,
);

exports.minimizarCSS = minimizarCSS;
exports.uglyflyJS = uglyflyJS;
// nombre de tarea      llamar funcion
exports.compilarSCSS = compilarSCSS;
exports.conCSS = conCSS;
exports.concaJS = concatJS;
exports.watcher = watcher;
