const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/Placement-Cell');
mongoose.connect('mongodb+srv://rasmikanta:1234@cluster0.zrlrt7o.mongodb.net/?retryWrites=true&w=majority');
// mongoose.connect('mongodb+srv://aninda:aninda123@cluster0.oq73w.mongodb.net/?retryWrites=true&w=majority');



const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;
