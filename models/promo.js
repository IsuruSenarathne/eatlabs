const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Currency = require("mongoose-currency");

var promoSchema = new Schema({
    name:  {
        type: String,
        required: true,
        unique: true
    },
    image:  {
        type: String,
        required: true
    },
    label:  {
        type: String,
        default: ""
    },
    price: {
        type: Currency,
        required: true,
        min: 0
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Promo = mongoose.model("Promo", promoSchema);
module.exports = Promo;
// module.exports.promoSchema = promoSchema;
