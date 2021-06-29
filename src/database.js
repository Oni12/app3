const mongoose = require('mongoose');

mongoose.connect('mongodb://Oni:<Soficita1@>@cluster0.svxu4.mongodb.net/test', {
    useNewUrlParser: true
})
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));
