const express=require("express")
const router=express.Router()
const apiController=require("../controller/apiController")


// get all airbnb data
router.get('/airbnb',apiController.getAllapi)

// get one airbnb data
router.get("/airbnb/:id",apiController.getOneapi)

// post data to airbnb
router.post("/airbnb:id",apiController.createOneapi)

// update data on airbnb
router.patch("/airbnb/:id",apiController.updateOneapi)

// delete data from airbnb
router.delete("/airbnb/:id",apiController.deleteOneapi)

module.exports=router;