const { Router } = require("express")
const {
  getTransaction,
  createTransaction,
  deleteTransaction,
  updateTransaction,
  getTransactionDetail,
  getTransactionByUserId,
} = require("../Controller/transactionController")

const transactionRoute = Router()

transactionRoute.post("/create-transaction", createTransaction)
transactionRoute.get("/get-transaction", getTransaction)
transactionRoute.get("/get-transaction/:transactionId", getTransactionDetail)
transactionRoute.get("/get-transaction-userId/:userId", getTransactionByUserId)
transactionRoute.delete("/delete-transaction/:transactionId", deleteTransaction)
transactionRoute.put("/update-transaction/:transactionId", updateTransaction)

module.exports = transactionRoute
