require('dotenv').config()
console.log(process.env.MONGO_URI)


const mongoose = require('mongoose')
const { Schema } = mongoose;

const blogSchema = new Schema({
    filmType: String,
    filmProducerName: String,
    endDate: Date,
    filmName: String,
    district: Number,
    geolocation: {
      coordinates: [
        Number,
        Number
      ],
      type: String
    },
    sourceLocationId: Date,
    filmDirectorName: String,
    address: String,
    startDate: Date,
    year: Number,
});