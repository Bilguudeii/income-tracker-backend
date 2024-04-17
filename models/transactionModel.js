const { mongoose, Schema } = require("mongoose")

const transactionSchema = new Schema({
  userId: { type: String, required: true },
  category: {
    type: String,
    enum: ["food", "shopping", "bills", "clothing"],
  },
  transactionTitle: String,
  amount: { type: Number, required: true },
  createAt: { type: Date },
  note: String,
  transactionType: {
    type: String,
    enum: ["income", "expense"],
  },
})

const transactionModel = mongoose.model("transactions", transactionSchema)

module.exports = transactionModel
