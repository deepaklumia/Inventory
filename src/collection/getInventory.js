const inventoryModel = require('../model/inventoryModel');

const getInventory = async function (req, res) {
    try {
        let inventory = await inventoryModel.find({ isDeleted: false });
        if (Object.keys(inventory).length===0) {
        
            return res.status(404).send({status:false, message: 'Data not found' });
        }else{
            return res.status(200).send({status:true, data: inventory });
        }
        
    } catch (e) {
        return res.status(500).send({ status:false,message: e.message });
    }
}
module.exports.getInventory = getInventory;