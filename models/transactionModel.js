const { mongoose, Schema } = require("mongoose");

const transactionSchema = new Schema({
  userId: { type: String, required: true },
  catecory: {
    type: String,
    enum: ["food", "shopping", "bills", "clothing"],
  },
  transactionTitle: String,
  amount: { type: Number, required: true },
  createAt: { type: Date, default: Date.now() },
  note: String,
  transactionType: {
    type: String,
    enum: ["income", "expense"],
  },
});