const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001
const NODE_ENV = process.env.NODE_ENV || 'Dev'
const app = express()
const cors = require('cors');
const carmaRouter = require('./routes/carma-router')

app.use(logger('dev'))
app.use(cors());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/cars', carmaRouter);

app.listen(PORT, () => {
 console.log(`server is listening on port ${PORT}`)
})
console.log(`Developing on ${NODE_ENV} enironment`)

app.get('*', function(req, res) {
    res.status(404).send({message: 'Oops! Not found.'});
  });