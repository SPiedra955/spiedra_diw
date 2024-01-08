const { series, src, dest, watch } = require("gulp");
const scss = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat-css");

/*
 * The outputStyle option determines how the compiled CSS is formatted.
 * The expanded option sets the output style to be more human-readable and easier
 * to understand. It adds indentation and line breaks to the CSS, making it easier
 * to read and debug
 */
function compilarSCSS() {
  return src("src/scss/*.scss")
    .pipe(scss({ outputStyle: "expanded" }))
    .pipe(dest("src/css/"));
}

function concatCSS() {
  return src("src/css/**/*.css").pipe(concat("main.css")).pipe(dest("dist/"));
}

function watcher() {
  watch("src/scss/**/*.scss", compilarSCSS);
}

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
exports.compilarSass = compilarSCSS;
exports.watcher = watcher;
exports.concatCSS = concatCSS;
exports.actividad = series(
  (compilarSCSS = compilarSCSS),
  (concatCSS = concatCSS)
);
