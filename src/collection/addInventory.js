const inventoryModel = require('../model/inventoryModel');
const addInventory = async function (req, res) {
   try {
      let data = req.body;
      let { title, price, brand, description } = data;
      if (Object.keys(data).length === 0 || !data) {
         return res.send(400).send({ status: false, message: 'please fill in the inventory' });
      }
      if (!title === "") {
         return res.send(400).send({ status: false, message: 'please fill title ' });
      }
      if (!price === "") {
         return res.send(400).send({ status: false, message: 'please fill price ' });
      }
      if (!brand === "") {
         return res.send(400).send({ status: false, message: 'please fill brand ' });
      }
      if (!description === "") {
         return res.send(400).send({ status: false, message: 'please fill description ' });
      }
      const inventory = await inventoryModel.create(data);
      console.log({ data: inventory });
      res.status(200).send({ status: true, data: inventory });

   } catch (e) {
      res.status(500).send({ status: false, message: e.message });
   }
}
module.exports.addInventory = addInventory;
