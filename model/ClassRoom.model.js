const { Schema, model } = require("mongoose")

const ClassRoomSchema = new Schema(
    {
        classroomID:String,
        capacity : String,
        requirement : String,
        subjects : Array,
        languageRequirement : Array,
        location: String,
        volunteersId:[
            {
                productId: Schema.Types.ObjectId,
            }
        ],
    },
    { collection : "classroomdata" }
)



const ClassRoomModel = model( "ClassRoomModel", ClassRoomSchema , "classroomdata")

module.exports = { ClassRoomModel };