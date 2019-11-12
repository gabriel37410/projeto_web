var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testimonialsRouter = require('./routes/testimonials');
var servicosRouter = require('./routes/servicos');
var adminPostsRouter = require('./routes/admin/posts');
var adminProjectsRouter = require('./routes/admin/projects');
var adminTestimonialsRouter = require('./routes/admin/testimonials');
var authRouter = require('./routes/auth');
var verifyAuth = require('./middlewares/authMiddleware');
var adminTempsRouter = require('./routes/admin/temps');//
var adminLuzsRouter = require('./routes/admin/luzs');//
var domoticasRouter = require('./routes/domoticas');//

var app = express();

app.set('trust proxy', 1);
app.use(session({
  secret: 'mySecret123',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/testimonials', testimonialsRouter);
app.use('/servicos', servicosRouter);
app.use('/admin/posts', [verifyAuth], adminPostsRouter);
app.use('/admin/projects', [verifyAuth], adminProjectsRouter);
app.use('/admin/testimonials', [verifyAuth], adminTestimonialsRouter);
app.use('/admin/temps', [verifyAuth], adminTempsRouter);//
app.use('/admin/luzs', [verifyAuth], adminLuzsRouter);//
app.use('/domoticas', domoticasRouter);//

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
