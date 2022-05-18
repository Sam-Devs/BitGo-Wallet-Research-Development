import bitgo from "../config/bitgo"
import { Response, Request} from 'express';
import axios from "axios";
import { BASE_URL } from "../utils/constant"

// Create a new address on a multi-sig wallet on BitGo

export const createAddress =async (req: Request, res: Response) => {
    const { asset, walletId }: any = req.query;

    bitgo
    .asset(asset as any)
    .wallets()
    .get({ id: walletId })
    .then((address: any) => {
        console.log(address);
        return res.send({ status: 200, data: address})
    }).catch((err: any) => {
        console.log(err);
        return res.send(err)
    });
}