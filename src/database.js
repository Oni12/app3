const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Oni:Soficita1@@cluster0.svxu4.mongodb.net/oni?retryWrites=true&w=majority', {
    useNewUrlParser: true
})
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));
