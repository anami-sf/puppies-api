const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/puppies',
     {useNewUrlParser: true}
 )

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
})

