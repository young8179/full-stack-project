
const express = require('express');
const bodyParser = require('body-parser');
const db = require("./models")
const cookieParser = require('cookie-parser');
const es6Renderer = require('express-es6-template-engine');

const session = require("express-session")
// const SequelizeStore =
//   require('connect-session-sequelize')(session.Store);
  
// const store = new SequelizeStore({ db: db.sequelize })

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const indexRouter = require('./routes/index'); //login
const mainRouter = require('./routes/main');  //main
const registerRouter = require('./routes/register');  //main

// app.use(cookieParser())
// app.use(session({
//   secret: 'secret', // used to sign the cookie
//   resave: false, // update session even w/ no changes
//   saveUninitialized: true, // always create a session
//   store: store

// }))
// store.sync()

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');


app.use(express.static('./public'));
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);   //login
app.use('/main', mainRouter); //main
app.use('/register', registerRouter);

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

module.exports = app;




app.listen(3000, function () { 
  console.log('budget API is now listening on port 3000...');
});

