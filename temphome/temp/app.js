const express = require('express');
const morgan = require('morgan');

const productRoutes = require('./weathers/weather.controller');
const { connect, sync } = require('./config/database');
const app = express();
const cors = require('cors')


// Setting up middleware
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use((req, res, next) => {
  res.header('Access-control-Allow-Origin', '*');
  res.header('Access-control-Allow-Header', 'Origin,X-Requested-With, Content-Type,Accept');
  next();

})




async function initializeDatabase() {
  await connect();
  await sync();
}

initializeDatabase();

// Setting up routes
app.use('/weathers', productRoutes);

// Creating a server
app.listen(5000, () => {
  console.log('Listening on port 5000');
});