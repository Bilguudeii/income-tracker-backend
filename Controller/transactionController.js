const transactionModel = require("../models/transactionModel")

const createTransaction = async (req, res) => {
  const data = req.body
  try {
    const response = await transactionModel.create(data)
    res.status(200).send(`${response._id} Амжилттай боллоо`)
  } catch (error) {
    res.send(error)
  }
}

const getTransaction = async (req, res) => {
  try {
    const response = await transactionModel.find({})
    res.status(200).send(response)
  } catch (error) {
    res.status(500).send(error)
  }
}
const deleteTransaction = async (req, res) => {
  const transactionId = req.params.transactionId
  try {
    const response = await transactionModel.findByIdAndDelete(transactionId)
    res.status(200).send(`${response._id} Амжилттай устлаа`)
  } catch (err) {
    res.status(500).send(err)
  }
}
const updateTransaction = async (req, res) => {
  const transactionId = req.params.transactionId
  const body = req.body
  try {
    const response = await transactionModel.findByIdAndUpdate(
      transactionId,
      body
    )

    res.status(200).send(response)
  } catch (err) {
    res.status(500).send(err)
  }
}

const getTransactionDetail = async (req, res) => {
  // user id aar avah
  const { transactionId } = req.params
  try {
    const response = await transactionModel.findById(transactionId)
    res.status(200).send(response)
  } catch (err) {
    res.status(500).send(err)
  }
}
const getTransactionByUserId = async (req, res) => {
  const { userId } = req.params
  try {
    const response = await transactionModel.find({ userId: userId })
    res.status(200).send(response)
  } catch (err) {
    res.status(500).send(err)
  }
}

module.exports = {
  createTransaction,
  getTransaction,
  deleteTransaction,
  updateTransaction,
  getTransactionDetail,
  getTransactionByUserId,
}
