const mongoose = require("mongoose");
dbConnect()
async function dbConnect(){

     try {
//          await mongoose.connect('mongodb+srv://sathya:sathyapr@cluster0.wrqpt.mongodb.net/sheyjobsudemy' , {useNewUrlParser : true});
          await mongoose.connect('mongodb://localhost:27017/gmnportal', {useNewUrlParser : true, useUnifiedTopology: true});
         console.log('Mongo DB Connection success')
     } catch (error) {
         console.log('Mongo DB Connection failed')
     }

}

module.exports = mongoose
