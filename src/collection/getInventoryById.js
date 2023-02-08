const mongoose = require("mongoose");
const inventoryModel = require('../model/inventoryModel');
const objectId = mongoose.Types.ObjectId;



const getInventoryById = async function (req, res) {
    try {
        let { id } = req.params;
        if (!objectId.isValid(id)) {
            return res
                .status(404)
                .send({ status: false, message: "Id is not valid" });
        } 
        let inventoryData = await inventoryModel.findOne({_id:id});
        if (Object.keys(inventoryData).length===0){
            return res
                .status(400)
                .send({ status: false, message: "No record found" });
        }
        if(inventoryData.isDeleted){
            return res
            .status(404)
            .send({ status: false, message: "Record not found"});
        }else{
            return res
            .status(200)
            .send({ status: true, data: inventoryData});
        }
        
    } catch (err) {
        console.log(err);
        return res.status(500).send({ status: false, message: err.message });
    }
}
module.exports.getInventoryById = getInventoryById;