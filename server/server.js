

// var createError = require('http-errors');
var express = require('express');
// var path = require('path');

var indexRouter = require('./routes/index');
var authodRouter = require('./routes/authorRoute');

var app = express();

// view engine setup
// app.set('views', (path.join(__dirname, '..', 'client')));
// app.set('view engine', 'ejs');

app.use(express.json());

app.use('/test', indexRouter);
app.use('/author', authodRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

var port = process.env.PORT || '3000';

app.listen(port, ()=>{
  console.log("Server is started in port "+port)
})

module.exports = app;
