// Data controller
// get all api

const service=require("../service/service")
const getAllapi=(req,res)=>{
const getAirbnb=service.getAllapi()
}

const getOneapi=(req,res)=>{
const airbnb=service.getOneapi()
}

// update one api
const createOneapi=(req,res)=>{
const createdAirbnb=service.createOneapi()
}

// post new api
const updateOneapi=(req,res)=>{
    const updatedAirbnb=service.updateOneapi()

}

// delete api
const deleteOneapi=(req,res)=>{
service.deleteOneapi()
}

module.exports={
    getOneapi,
    getAllapi,
    createOneapi,
    updateOneapi,
    deleteOneapi
}