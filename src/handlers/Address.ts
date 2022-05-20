import bitgo from "../config/bitgo";
import { Response, Request } from "express";
import axios from "axios";
import { BASE_URL } from "../utils/constant";

//   Create a new address
export const createAddress = async (req: Request, res: Response) => {
  const { coin, walletId }: any = req.query;

  bitgo
    .coin(coin as any)
    .wallets()
    .get({ id: walletId })
    .then((wallet: any) => {
      return wallet.createAddress({ label: req.body.label });
    })
    .then((address: any) => {
      console.log(address);
      return res.send({ status: 200, data: address });
    })
    .catch((err: any) => {
      console.log(err);
      return res.send(err);
    });
};

//   Update an address
export const updateAddress = async (req: Request, res: Response) => {
  const { coin, walletId, address }: any = req.query;
  const params = {
    label: req.body.label,
  };

  try {
    const response = await axios.put(
      `${BASE_URL}/${coin}/wallet/${walletId}/address/${address}`,
      params,
      {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        },
      }
    );
    console.log(response);
    res.send({ status: 200, data: response.data });
  } catch (err) {
    res.send(err);
  }
};

//   Get a single address
export const singleAddress = async (req: Request, res: Response) => {
  const { coin, walletId, address }: any = req.query;

  bitgo
    .coin(coin as any)
    .wallets()
    .get({ id: walletId })
    .then(async (wallet: any) => {
      const response = await wallet.getAddress({ address: address });
      return res.send({
        status: 200,
        data: response,
      });
    })
    .catch((err: any) => {
      return res.send(err);
    });
};

//   Get all addresses on a single multi-sig wallet on BitGo
export const getAllAddresses = async (req: Request, res: Response) => {
  const { coin, walletId }: any = req.query;

  bitgo
    .coin(coin as any)
    .wallets()
    .get({ id: walletId })
    .then((wallet: any) => {
      return wallet.addresses();
    })
    .then((address: any) => {
      console.log(address);
      return res.send({ status: 200, data: address });
    })
    .catch((err: any) => {
      console.log(err);
      return res.send(err);
    });
};
