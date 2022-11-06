const { Router } = require("express")
const { CreateVolunteer, getVolunteerData } = require("../controller/Registration.controller")
const RegistrationRouter = Router()

RegistrationRouter.post("/createVolunteer",async (req,res)=>{
    const {name,age,subjects,spokenlanguages,location,availableDay,phone} = req.body
    const { message , status, data } = await CreateVolunteer(name,age,subjects,spokenlanguages,location,availableDay,phone)
    if (status === "error") {
        return res.status(404).send({ message, status, data });
    }
    return res.status(200).send({message, status,data });
})

RegistrationRouter.get("/getVolunteerData", async (req,res)=>{
    const { message , status, data } = await getVolunteerData()
    if (status === "error") {
        return res.status(404).send({ message, status, data });
    } 
    return res.status(200).send({message, status , data});
})

module.exports = { RegistrationRouter }