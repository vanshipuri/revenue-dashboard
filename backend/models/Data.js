const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },
  data: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
});

const Data = mongoose.model("Data", DataSchema);

module.exports = Data;
