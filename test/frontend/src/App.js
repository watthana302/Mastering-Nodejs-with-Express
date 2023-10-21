const express = require('express');
const Quote = require('inspiration-quotes');

const app = express();

app.use((req,res, next)=>{
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Origin','Origin, X-Requested-With, Content-Type, Accept');
  next();

})

app.get('/',(req, res)=>{
  res.send(Quote.getQuote());

})

app.listen(5000, ()=>{
  console.log('server start');
})