const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.MONGO_URI;

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('DB connection successful...');
}).catch((error)=>{
    console.log(`${error}\nDB connection failed...`)
});