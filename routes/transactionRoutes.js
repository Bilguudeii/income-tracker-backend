const { Router } = require("express");
const { getIncome, createIncome } = require("../Controller/incomeControllers");
 
const transactionRoute = Router();
 
transactionRoute.get("/get-income", getIncome);
transactionRoute.post("/create-transaction", createIncome);
 
module.export = { transactionRoute };