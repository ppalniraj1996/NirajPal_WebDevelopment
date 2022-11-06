const { VolunteerModel } = require("../model/Registration.model")
const { ClassRoomModel } = require("../model/ClassRoom.model")

const AllocateVolunteer = async () =>{
    try {
        const Vdata = await VolunteerModel.find();
        const Cdata = await ClassRoomModel.find()

        Cdata.map((el)=>{
            Vdata.map((item)=>{
                el.languageRequirement.map((e)=>{
                    item.spokenlanguages.map((i)=>{
                        if(e==i){
                            console.log(e,"jhvdjhsa",item._id,el.classroomID);
                        //     let data = ClassRoomModel.updateOne(
                        //         { languageRequirement : e },
                        //         { $push: { volunteersId: { productId: item._id } } }
                        //     );
                        //    let data2=  VolunteerModel.updateOne(
                        //         { languageRequirement : e },
                        //         { $push: { classRoomId: el.classroomID } }
                        //     );
                        const Vdata =  VolunteerModel.find( { spokenlanguages : e });
                        const Cdata =  ClassRoomModel.find( { languageRequirement : e })
                            console.log(Vdata,Cdata);
                        }
                    })
                })
            })
        })
        
        return {
            message: " Volunteers data obtained successfully",
            status: "success",
            data: {Vdata,Cdata}
        };
    } catch (error) {
        return { message: "something went wrong", status: "error", data: error };
    }
}


module.exports={ AllocateVolunteer }