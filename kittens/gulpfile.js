const { series,src,dest, watch } = require('gulp'); //Constante general de GULP para usar sus funciones.
const limpiarCSS = require('gulp-clean-css');
const uglyJS = require('gulp-uglyfly');
const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat-css');
const concat2 = require('gulp-concat');



function watcher(){

    watch('src/sass/partials/*.scss',compilarSCSS);
    watch
  
}


function compilarSCSS(){

    return src("src/sass/*.scss")
    .pipe(scss())
    .pipe(dest('src/css'));
  
}

// Compilar
function uglyflyJS(){
    
    return src("src/js/*.js")
    .pipe(uglyJS())
    .pipe(dest("dist/js/"));
  
  }
function minimizarCSS(){

    return src("src/css/*.css") //Cual es el documento
    .pipe(limpiarCSS())
    .pipe(dest("dist/css/")); //Donde lo mandamos
  
}


function concatCSS1(){
    return src("dist/css/*.css")
    .pipe(concat("all.css"))
    .pipe(dest("dist/css"));
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

function concatJS(){
    return src("dist/css/*.css")
    .pipe(concat2("all.js"))
    .pipe(dest("dist/js"));

}
exports.build = build;
exports.kittens = series(compilarSCSS, minimizarCSS, uglyflyJS, concatCSS1, concatJS);

exports.minimizarCSS = minimizarCSS;
exports.uglyflyJS = uglyflyJS;
// nombre de tarea      llamar funcion
exports.compilarSCSS = compilarSCSS;
exports.concatCSS = concatCSS1;
exports.concaJS =concatJS; 
exports.watcher = watcher;