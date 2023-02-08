const express = require('express');
const router = express.Router();
const { addInventory } = require('../collection/addInventory');
const { getInventoryById } = require('../collection/getInventoryById');
const { getInventory } = require('../collection/getInventory')
const { updateInventory } = require('../collection/updateInventory');
const { deleteInventory } = require('../collection/deleteInventory');

router.get('/', function (req, res) {
      res.send('server is running on port 3000');
})

router.get('/inventory', getInventory);
router.get('/inventory/:id', getInventoryById);
router.post('/inventory', addInventory);
router.put('/inventory/:id', updateInventory);
router.delete('/inventory/:id', deleteInventory);
module.exports = router;