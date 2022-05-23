import bitgo from "../config/bitgo";
import { Request, Response} from "express"
import { IWebhook } from "../interfaces";

// Create a webhook 

export const addWalletWebhook = (req: Request, res: Response) => {
    const { coin, walletId }: any = req.query;
    const {callbacklurl, type }: any = req.query;

    bitgo
    .coin(coin as any)
    .wallets()
    .get({ id: walletId })
    .then((wallet: any) => {
        return wallet.addWebhook({
            url: callbacklurl,
            type: type
        })
    })
    .then((webhook: IWebhook) => {
        console.log(webhook);
        return res.send({ status: 200, data: webhook })
    }).catch((err: any) => {
        console.log(err);
        return res.send(err)
    });
}

// Delete a webhook 
export const deleteWalletWebhook = (req: Request, res: Response) => {
    const { coin, walletId }: any = req.query;
    const { callbackUrl, type }: any = req.query;

    bitgo
    .coin(coin as any)
    .wallets()
    .get({ id: walletId })
    .then((wallet: any) => {
        return wallet.removeWebhook({
            url: callbackUrl,
            type: type
        })
    })
    .then((webhook: IWebhook) => {
        console.log(webhook);
        return res.send({ status: 200, data: webhook });
    }).catch((err: any) => {
        return res.send(err)
    });
}