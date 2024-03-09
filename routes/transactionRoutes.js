const { Router } = require("express");
const {
  getTransaction,
  createTransaction,
} = require("../Controller/transactionController");

const transactionRoute = Router();

transactionRoute.post("/create-transaction", createTransaction);
transactionRoute.get("/get-transaction", getTransaction);

module.exports = transactionRoute;
