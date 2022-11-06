const { Router } = require("express")
const { AllocateVolunteer } = require("../controller/Allocation.controller")
const AllocationRouter = Router()


AllocationRouter.get("/allocate", async (req,res)=>{
    const { message , status, data } = await AllocateVolunteer()
    if (status === "error") {
        return res.status(404).send({ message, status, data });
    } 
    return res.status(200).send({message, status , data});
})

module.exports = { AllocationRouter }