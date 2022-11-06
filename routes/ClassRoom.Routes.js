const { Router } = require("express")
const { ClassRoom, getClassRoomData } = require("../controller/ClassRoom.controller")
const ClassRoomRouter = Router()

ClassRoomRouter.post("/createclassroom",async (req,res)=>{
    const {classroomID,capacity,requirement,subjects,languageRequirement,location} = req.body
    const { message , status } = await ClassRoom(classroomID,capacity,requirement,subjects,languageRequirement,location)
    if (status === "error") {
        return res.status(404).send({ message, status });
    }
    return res.status(200).send({message, status });
})

ClassRoomRouter.get("/getClassRoomData", async (req,res)=>{
    const { message , status, data } = await getClassRoomData()
    if (status === "error") {
        return res.status(404).send({ message, status });
    } 
    return res.status(200).send({message, status , data});
})

module.exports = { ClassRoomRouter }