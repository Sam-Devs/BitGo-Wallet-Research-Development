import { Request, Response } from "express";
import bitgo from "../config/bitgo";
import { BASE_URL } from "../utils/constant";

// Get a Wallet Balance by Id
export const WalletBalance =async (req: Request, res: Response) => {
    const {coin, walletId} = req.query;

    bitgo
    .coin(coin as any)
    .wallets()
    .get({ id: walletId })
    .then((wallet: any) => {
        return res.send({
            status: 200,
            balances: {
                balance: wallet._wallet.balance,
                confirmedBalance: wallet._wallet.confirmedBalance,
                spendableBalance: wallet._wallet.spendableBalance,
                balanceString: wallet._wallet.balanceString,
                confirmedBalanceString: wallet._wallet.confirmedBalanceString,
                spendableBalanceString: wallet._wallet.spendableBalanceString
            }
        })
    }).catch((err: any) => {
        return res.send(err);
    });
}

// Address Specific Balance
export const 