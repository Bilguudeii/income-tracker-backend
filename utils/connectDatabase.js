const mongoose = require("mongoose");

  const connectDatabase = async () => {
    try {
      await mongoose.connect("mongodb+srv://npx:060818@cluster0.bnme7qc.mongodb.net/?retryWrites=true&w=majority");
      console.log("Database succesfully connected")
    } catch (err) {
      console.log(err);
    }
  };

module.exports = connectDatabase;
