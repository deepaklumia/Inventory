const mongoose = require("mongoose");
const inventoryModel = require('../model/inventoryModel');
const objectId = mongoose.Types.ObjectId;

const updateInventory = async function (req, res) {
    try {
        const data = req.body;
        const { id } = req.params;
        if (!objectId.isValid(id)) {
            res.status(400).send({
                status: false,
                message: "Please fill valid inventory id",
            });
        }
        const inventoryData = await inventoryModel.findOne({ _id: id });
        if (Object.keys(inventoryData).length === 0) {
            return res.status(404).send({
                status: false,
                message: "Not available data of this id",
            });
        }
        if (inventoryData.isDeleted === true) {
            return res
                .status(404)
                .send({ status: false, message: "This inventory already deleted" });
        }
        if (inventoryData.isDeleted === false) {
            let updatedInventory = await inventoryModel.findOneAndUpdate(
                { _id: id },
                {
                    $set: data
                },
                { new: true, upsert: true }
            );
            return res.status(200).send({ status: true, data: updatedInventory });
        }
    } catch (e) {
        console.log(e);
        return res.status(500).send({ status: false, message: e.message });
    }
}



module.exports.updateInventory = updateInventory