require('dotenv').config()

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI).then(() => {console.log('Connected !') 
console.log('Toto')})



const { Schema } = mongoose;

const filmSchema = new Schema({
    filmType: String,
    filmProducerName: String,
    endDate: Date,
    filmName: String,
    district: Number,
    geolocation: {
      coordinates: [Number],
      type: String
    },
    sourceLocationId: String,
    filmDirectorName: String,
    address: String,
    startDate: Date,
    year: Number,
});

const Location = mongoose.model("Location",filmSchema)
const maPremiereLocation = new Location ({filmType:'Horror'})
await maPremiereLocation.save()