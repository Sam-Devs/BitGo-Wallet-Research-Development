import express from "express";
import {
  createAddress,
  allAddresses,
  updateAddress,
  singleAddress,
} from "../handlers/Address";
import { addressBalance, walletBalance } from "../handlers/Balances";
import {
  transfer,
  pendingTransaction,
  allTransfers,
  singleTransfer,
} from "../handlers/Transfer";
import {
  createWallet,
  updateWallet,
  deleteWallet,
  getAllWallets,
  getWallet,
} from "../handlers/Wallet";

const router = express.Router();

// Wallet
router.post("/wallet", createWallet);
router.get("/wallets", getAllWallets);
router.get("/wallet", getWallet);
router.put("/wallet", updateWallet);
router.delete("wallet", deleteWallet);

// Address
router.post("/address", createAddress);
router.put("/address", updateAddress);
router.get("/addresses", allAddresses);
router.get("/address", singleAddress);

// Transfer
router.post("/transfer", transfer);
router.get("/transaction-status", pendingTransaction);
router.get("/transfers", allTransfers);
router.get("/transfer", singleTransfer);
