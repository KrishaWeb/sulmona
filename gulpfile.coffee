gulp            = require 'gulp'
plumber         = require 'gulp-plumber'
rename          = require 'gulp-rename'
autoprefixer    = require 'gulp-autoprefixer'
concat          = require 'gulp-concat'
uglify          = require 'gulp-uglify'
imagemin        = require 'gulp-imagemin'
minify          = require 'gulp-clean-css'
streamqueue     = require 'streamqueue'
browserSync     = require 'browser-sync'
gutil           = require 'gulp-util'

config =
	bowerDir: './bower_components/'

path =
	styles: [
		'src/css/**/theme.css',
		#config.bowerDir + 'bootstrap/dist/css/bootstrap.css',
		'src/css/**/colorbox.css',
		'src/css/**/sulmona-icon.css',
		'src/css/**/style.css',
		'src/css/**/media.css'
	],
	scripts: [
		config.bowerDir + 'jquery/dist/jquery.js',
		#config.bowerDir + 'bootstrap/dist/js/bootstrap.js',
		config.bowerDir + 'isotope/dist/isotope.pkgd.min.js',
		'src/js/**/jquery.colorbox-min.js'
		'src/js/**/setting.js'
	],
	fonts: [
		'src/fonts/**/*.*'
	],
	images: 'src/images/**/*.*',
	php: [
		'*.php'
	]

gulp.task 'styles', ->
	stream = streamqueue(objectMode: true)
	stream.queue(gulp.src(path.styles))
	stream.done()
		.pipe(plumber())
		.pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))
		.pipe(concat('style.css'))
		.pipe(gulp.dest('css/'))
		.pipe(minify({keepSpecialComments : 0}))
		#.pipe(rename({suffix: '.min'}))
		.pipe(plumber.stop())
		.pipe(gulp.dest(''))
		.pipe(browserSync.reload({stream:true}))

gulp.task 'scripts', ->
	stream = streamqueue(objectMode: true)
	stream.queue(gulp.src(path.scripts))
	stream.done()
		.pipe(plumber())
		.pipe(concat('script.js'))
		.pipe(gulp.dest('js/'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(plumber.stop())
		.pipe(gulp.dest('js/'))
		.pipe(browserSync.reload({stream:true}))

gulp.task 'images', ->
	stream = streamqueue(objectMode: true)
	stream.queue(gulp.src(path.images))
	stream.done()
		.pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
		.pipe(gulp.dest('images/'))
		.pipe(browserSync.reload({stream:true}))

gulp.task 'php', ->
	stream = streamqueue(objectMode: true)
	stream.queue(gulp.src(path.php))
	stream.done()
		.pipe(browserSync.reload({stream:true}))

gulp.task 'fonts', ->
	stream = streamqueue(objectMode: true)
	stream.queue(gulp.src(path.fonts))
	stream.done()
		.pipe(gulp.dest('fonts/'))

gulp.task 'connect-sync', ['styles', 'scripts', 'php'], ->
	browserSync.init null,
		proxy: 'localhost/sulmona'
		open: true
		reloadDelay: 50
		watchOptions:
			debounceDelay: 50
gulp.watch ['src/css/**/**'], ['styles']
gulp.watch ['src/js/**/**'], ['scripts']
gulp.watch path.php, ['php']
gulp.watch ['*', 'js/**', 'css/**'], (file) ->
	browserSync.reload(file.path) if file.type is "changed"

gulp.task 'watch', ->
	gulp.watch ['src/css/**/**'], ['styles']
	gulp.watch ['src/js/**/**'], ['scripts']
	gulp.watch path.images, ['images']
	gulp.watch path.fonts, ['fonts']

gulp.task 'default', ['watch', 'connect-sync']