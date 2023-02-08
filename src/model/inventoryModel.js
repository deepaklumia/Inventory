const mongoose = require("mongoose");
// const objectId = mongoose.Schema.Types.ObjectId;
const inventoryModules = mongoose.Schema({
    itemId: { type: Number, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: Buffer },
    rating: { rate: { type: Number }, stock: { type: Number, required: true } },
    isDeleted: { type: Boolean, default: false }
}, { timestamps: true });
module.exports = mongoose.model("Inventory", inventoryModules);
