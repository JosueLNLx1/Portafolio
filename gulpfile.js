//importar gulp
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

//Tarea para compilar Sass
function compileSass(done) {
  return gulp
    .src("sass/app.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("styles/"));

  done();
}

//funcion para automatizar la tarea de Sass (watch)
function watchFiles() {
  gulp.watch("sass/", compileSass);
}

exports.sass = compileSass;
exports.watch = watchFiles;

exports.default = gulp.series(compileSass, watchFiles);
