const { Router } = require("express");
const { createIncome } = require("../Controller/incomeController");
 
const transactionRoute = Router();
 
transactionRoute.post("/create-transaction", createIncome);
 
module.export = { transactionRoute };