import { Response, Request } from "express";
import bitgo from "../config/bitgo";
import axios from "axios";
import { BASE_URL } from "../utils/constant";

// Create Wallet
export const createWallet = async (req: Request, res: Response) => {
  // bitgo.authenticateWithAccessToken({ accessToken });
  const { coin, label, passphrase } = req.body;

  const params = {
    label,
    passphrase,
  };

  bitgo
    .coin(coin)
    .wallets()
    .generateWallet(params)
    .then((wallet: any) => {
      console.log({ wallet });
      res.send({ status: 200, data: wallet });
    })
    .catch((err: any) => {
      console.log(err);
      return res.send(err);
    });
};


//   Update wallet
export const updateWallet = async (req: Request, res: Response) => {
  const { coin, walletId, address }: any = req.query;
  const { label, passphrase } = req.body;

  const params = {
    label,
    passphrase,
  };
  
  await axios
    .put(`${BASE_URL}/${coin}/wallet/${walletId}`, params, {
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    })
    .then((wallet: any) => {
      return res.send({ status: 200, data: wallet.data });
    })
    .catch((error: any) => {
      console.log(error);
      return res.send({ status: 400, message: error });
    });
};

//   Delete a single on BitGo

export const deleteWallet = async (req: Request, res: Response) => {
  const { coin, walletId }: any = req.query;
  
  await axios
    .delete(`${BASE_URL}/${coin}/wallet/${walletId}`, {
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    })
    .then((wallet: any) => {
      console.log(wallet);
      return res.send({ status: 200, data: wallet.data });
    })
    .catch((error: any) => {
      console.log(error);
      return res.send({ status: 400, message: error });
    });
};


//   Get a single wallet
export const getWallet = async (req: Request, res: Response) => {
  const { coin, walletId }: any = req.query;
  
  await axios
    .get(`${BASE_URL}/${coin}/wallet/${walletId}`, {
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    })
    .then((wallet: any) => {
      return res.send({ status: 200, data: wallet.data });
    })
    .catch((error: any) => {
      return res.send({ status: 400, message: error });
    });
};

//   Get all wallets
export const getAllWallets = async (req: Request, res: Response) => {
  
  await axios
    .get(`${BASE_URL}/wallets`, {
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    })
    .then((wallet: any) => {
      return res.send({ status: 200, data: wallet.data });
    })
    .catch((error: any) => {
      return res.send({ status: 400, message: error });
    });
};