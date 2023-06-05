const DB=require("./airbnb.json")

const getAllapi=()=>{
    return DB.Airbnb;
}

module.exports={getAllapi}