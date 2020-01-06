const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');

//connecting to db
mongoose.connect('mongodb://localhost/prueba', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('DB connected')).
  catch((err) => console.log(err));

//configuring cors
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', ['*']);
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');
  next();
});

//setings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

//midlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

//router
app.use('/', require('./routes/index'));
app.use('/admin', require('./routes/admin'))

app.listen(app.get('port'), () => {
  console.log('Server running on port ' + app.get('port'));
})