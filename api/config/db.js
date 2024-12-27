const mongoose = require("mongoose");

async function mongoDBConnect() {
    const uri = "mongodb://localhost:27017/AIT-intern";
    try {
        await mongoose.connect(uri, {
        });
        console.log("Connected to Mongoose");
    } catch (error) {
        console.log(error);
    }
}

module.exports = { mongoDBConnect };