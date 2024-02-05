const { Schema, model } = require("mongoose");

const systemSchema = new Schema({
    long: { type: String, required: true },
    short: { type: String, required: true },
});

module.exports = model("System",systemSchema);