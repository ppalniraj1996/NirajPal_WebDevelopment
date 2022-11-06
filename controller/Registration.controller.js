const { VolunteerModel } = require("../model/Registration.model")
const { ClassRoomModel } = require("../model/ClassRoom.model")

const CreateVolunteer = async (name,age,subjects,spokenlanguages,location,availableDay,phone) =>{
    try {
        if(phone.toString().length!=10){
            return { message: "Invalid Mobile Number", status: "invalid", data:phone };
        }
        let newVolunteerData ={
            name,
            age,
            subjects,
            spokenlanguages,
            location,
            availableDay,
            phone
        }
        const createnewVolunteerData = new VolunteerModel(newVolunteerData)
        createnewVolunteerData.save()
        console.log(createnewVolunteerData,"newFarmerData",phone);

        return { message: "volunteer created", status: "success", data:createnewVolunteerData };
    } catch (error) {
        return { message: "something went wrong", status: "error", data:error };
    }
}

const getVolunteerData = async () =>{
    try {
        const data = await VolunteerModel.find();
        return {
            message: " Volunteers data obtained successfully",
            status: "success",
            data: data,
        };
    } catch (error) {
        return { message: "something went wrong", status: "error", data: error };
    }
}


module.exports={ CreateVolunteer, getVolunteerData }