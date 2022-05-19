import { Request, Response } from "express";
import bitgo from "../config/bitgo";
import axios from "axios";

// Transfer from one wallet address to another
export const transfer = async (req: Request, res: Response) => {
  const { coin, walletId }: any = req.query;
  const { address, amount, walletPassphrase } = req.body;

  const params = {
    amount: amount * 1e8,
    address: address,
    walletPassphrase: walletPassphrase,
  };

  bitgo
    .coin(coin as any)
    .wallets()
    .get({ id: walletId })
    .then((wallet: any) => {
      return wallet.send(params).then((result: any) => {
        return res.send({ status: 200, data: result });
      });
    })
    .catch((err: any) => {
      console.log(err);
      return res.send(err);
    });
};

// Get all pending transactions on multi-sig wallet on BitGo
export const pendingTransaction = async (req: Request, res: Response) => {
  const { coin, walletId, transferId }: any = req.query;

  bitgo
    .coin(coin as any)
    .wallets()
    .get({ id: walletId })
    .then((wallet: any) => {
      return wallet
        .getTransfer({ id: transferId })
        .then((result: any) => {
          console.log(result.state);
          return res.send({
            status: 200,
            transaction_status: result.state,
          });
        })
        .catch((err: any) => {
          return res.send(err);
        });
    })
    .catch((err: any) => {
      return res.send(err);
    });
};
