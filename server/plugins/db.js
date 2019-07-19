module.exports = app => {
  const mongoose = require('mongoose')
  mongoose.connect('mongodb://127.0.0.1:27017/wzry', {
    useNewUrlParser: true
  })
  mongoose.set('debug', 1)
  require('require-all')(__dirname + '/../models')

}