const { Router } = require("express");
const {
  getTransaction,
  createTransaction,
  deleteTransaction,
  updateTransaction,
} = require("../Controller/transactionController");

const transactionRoute = Router();

transactionRoute.post("/create-transaction", createTransaction);
transactionRoute.get("/get-transaction", getTransaction);
transactionRoute.delete("/delete-transaction/:transactionId", deleteTransaction)
transactionRoute.post("/update-transaction/:transactionId", updateTransaction)


module.exports = transactionRoute;
