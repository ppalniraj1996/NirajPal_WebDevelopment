const { Schema, model } = require("mongoose")

const VolunteerSchema = new Schema(
  {
    name: String,
    age: String,
    subjects: Array,
    spokenlanguages: Array,
    location: String,
    availableDay: String,
    classRoomId: String,
    phone:Number,
  },
  { collection: "volunteerdata" }
);



const VolunteerModel = model( "VolunteerModel", VolunteerSchema , "volunteerdata")

module.exports = { VolunteerModel };