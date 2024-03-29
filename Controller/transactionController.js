const transactionModel = require("../models/transactionModel");

const createTransaction = async (req, res) => {
  const data = req.body;
  try {
    const response = await transactionModel.create(data);
    console.log(response);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getTransaction = async (req, res) => {
  try {
    const response = await transactionModel.find({});
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { createTransaction, getTransaction };
