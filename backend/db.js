const mongoose = require("mongoose");

 exports.Database= function Database() {
    mongoose.set('strictQuery', false);
    mongoose
      .connect("mongodb+srv://meyuvraj23:Netflix@cluster0.kmrixkl.mongodb.net/", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })


      .then(() => {
        console.log("DB Connetion Successfull");
      })
      .catch((err) => {
        console.log(err.message);
      });
}
