import { BASE_URL } from "../utils/constant";
import { Request, Response} from "express";
import axios from "axios";
import bitgo from "../config/bitgo";


// Create Wallet
export const createWallet = async (req: Request, res: Response) => {
    const { coin, label, passphrase } = req.body;

    const params = {
        label,
        passphrase
    }

    bitgo
    .coin(coin)
    .wallets()
    .generateWallet(params)
    .then((wallet: any) => {
        console.log({wallet});
        res.send({ status: 200, data: wallet })
    }).catch((err: any) => {
        console.log(err);
        return res.send(err)
    });
}

// Update wallet address