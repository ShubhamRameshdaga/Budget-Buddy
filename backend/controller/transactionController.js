//jshint esversion:9
import moment from "moment/moment.js";
import transectionModel from "../models/transectionModel.js";

export const getAllTransaction = async (req, res) => {
  try {
    const { frequency, selectedDate, type } = req.body;
    const transactions = await transectionModel.find({
      ...(frequency !== "custom"
        ? {
            date: {
              $gt: moment().subtract(Number(frequency), "d").toDate(),
            },
          }
        : {
            date: {
              $gte: selectedDate[0],
              $lte: selectedDate[1],
            },
          }),
      userid: req.body.userid,
      ...(type !== "all" && { type }),
    });
    res.status(200).json(transactions);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const deletetransaction = async (req, res) => {
  try {
    await transectionModel.findOneAndDelete({ _id: req.body.transactionId });
    res.status(200).send({
      message: "Transaction Deleted Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const edittransaction = async (req, res) => {
  try {
    await transectionModel.findOneAndUpdate(
      { _id: req.body.transactionId },
      req.body.payload
    );
    res.status(200).send({
      message: "Edit Successfully",
      success: "true",
    });
  } catch (error) {
    console.log(error);
  }
};

export const addtransaction = async (req, res) => {
  try {
    const newTransaction = new transectionModel(req.body);
    await newTransaction.save();
    res.status(201).send("Transaction Created");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
