const mongoose = require("mongoose");
const inventoryModel = require('../model/inventoryModel');
const objectId = mongoose.Types.ObjectId;


const deleteInventory = async function (req, res) {
    try {
        let { id } = req.params;
        if (!objectId.isValid(id)) {
            return res
                .status(404)
                .send({ status: false, message: "Id is not valid" });
        }
        let inventoryData = await inventoryModel.findOne({ _id: id, isDeleted: false });
        if (Object.keys(inventoryData).length === 0) {
            return res
                .status(400)
                .send({ status: false, message: "No record found" });
        }
        let updateInventoryData = await inventoryModel.updateOne(
            { _id: id },
            { isDeleted: true },
            { new: true }
        );
        console.log(updateInventoryData);
        return res
            .status(200)
            .send({ status: true, message: "inventory deleted successfully" });
    } catch (err) {
        console.log(err);
        return res.status(500).send({ status: false, message: err.message });
    }
}
module.exports.deleteInventory = deleteInventory;