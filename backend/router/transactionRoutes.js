//jshint esversion:9
import express from "express";
import {
  addtransaction,
  deletetransaction,
  edittransaction,
  getAllTransaction,
} from "../controller/transactionController.js";

const router = express.Router();

router.post("/add-transection", addtransaction);

router.post("/edit-transection", edittransaction);

router.post("/delete-transection", deletetransaction);

router.post("/get-transection", getAllTransaction);

export default router;
