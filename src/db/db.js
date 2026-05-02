const mongoose = require('mongoose');

async function connectDB() {
    await mongoose.connect("mongodb+srv://jhavivek6969_db_user:HiJnYC3y26iOJ4bD@cluster1.4psvilp.mongodb.net/project-1")
}