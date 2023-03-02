const mongoose = require("mongoose");
const proSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
});
module.exports = mongoose.model("Product", proSchema);
