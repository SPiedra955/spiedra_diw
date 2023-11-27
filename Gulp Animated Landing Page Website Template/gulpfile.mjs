
/*
const { series, src, dest, watch } = require("gulp");
const imagemin = require("gulp-imagemin");
const limpiarCSS = require("gulp-clean-css");
const uglyJS = require("gulp-uglyfly");
const sass = require("gulp-sass")(require("sass"));
const concatCSS = require("gulp-concat-css");
const concatFiles = require("gulp-concat");
*/

import gulp from 'gulp';
const { series, src, dest, watch } = gulp;
import imagemin from 'gulp-imagemin';
import limpiarCSS from 'gulp-clean-css'; // Corregido el nombre de la librería
import uglyJS from 'gulp-uglyfly';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import concatCSS from 'gulp-concat-css'; // No es necesario repetir 'gulp-imagemin'
import concatFiles from 'gulp-concat'; // No es necesario repetir 'gulp-imagemin'



function watcher() {
  watch("src/scss/*.scss", series(
    img,
    compilarSCSS,
    minimizarCSS,
    uglyflyJS,
    conCSS,
    concatJS,));
    watch("src/assets/**/*", img);
  }

function img(){
  return src("src/assets/**/*")
  .pipe(imagemin())
  .pipe(dest("dist/assets"));
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


export { build, 
  img, 
  minimizarCSS, 
  uglyflyJS, 
  compilarSCSS, 
  conCSS, 
  concatJS, 
  watcher };

export const slides = series(
  img,
  compilarSCSS,
  minimizarCSS,
  uglyflyJS,
  conCSS,
  concatJS
);
