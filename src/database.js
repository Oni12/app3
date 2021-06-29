const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://oni:oni@cluster0.svxu4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true
})
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));
