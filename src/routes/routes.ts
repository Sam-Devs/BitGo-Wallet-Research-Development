import express from "express";
import {
  createAddress,
  updateAddress,
  singleAddress,
  getAllAddresses,
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
import { addWalletWebhook, deleteWalletWebhook } from "../webhooks/webhooks";

const router = express.Router();

// Wallet
router.post("/wallet", createWallet);
router.put("/wallet", updateWallet);
router.get("/wallets", getAllWallets);
router.get("/wallet", getWallet);
router.delete("/wallet", deleteWallet);

// Address
router.post("/address", createAddress);
router.get("/addresses", getAllAddresses);
router.put("/address", updateAddress);
router.get("/address", singleAddress);

// Transfer
router.post("/transfer", transfer);
router.get("/transaction-status", pendingTransaction);
router.get("/transfers", allTransfers);
router.get("/transfer", singleTransfer);

// Balance
router.get("/wallet-balance", walletBalance);
router.get("/address-balance", addressBalance);

// Webhooks
router.post("/webhook", addWalletWebhook);
router.get("/webhook", deleteWalletWebhook);
export default router;