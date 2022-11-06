const { ClassRoomModel } = require("../model/ClassRoom.model")
const ClassRoom = async (classroomID,capacity,requirement,subjects,languageRequirement,location) =>{
    try {
        let newClassRoomData ={
            classroomID,
            capacity,
            requirement,
            subjects,
            languageRequirement,
            location,
        }
        console.log(newClassRoomData,"newFarmerData");
        const createnewClassRoomData = new ClassRoomModel(newClassRoomData)
        createnewClassRoomData.save()
        return { message: "classroomdata created", status: "success" };
    } catch (error) {
        return { message: "something went wrong", status: "error" };
    }
}

const getClassRoomData = async () =>{
    try {
        const data = await ClassRoomModel.find();
        return {
            message: "data obtained successfully",
            status: "success",
            data: data,
        };
    } catch (error) {
        return { message: "something went wrong", status: "error", data: error };
    }
}


module.exports={ ClassRoom, getClassRoomData }