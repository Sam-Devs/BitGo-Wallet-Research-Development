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

// Update an address on multi-sig wallet on BitGo
export const updateAddress =async (req: Request, res: Response) => {
    const { asset, walletid, address}: any = req.query;
    const params = {
        label: req.body.label
    }

    try {
        const response = await axios.put(
            `${BASE_URL}/${asset}/wallet/${walletid}/address/${address}`, params, {
                headers: {
                    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
                },
            }
        )
        console.log(response);
        res.send({ status: 200, data: response.data})
    } catch (error) {
        res.send(error)
    }
}


// Get a single address on a multi-sig wallet on BitGo

export const singleAddress =async (req: Request, res: Response) => {
    const {asset, walletId, address }: any = req.query;

    bitgo
    .asset(asset as any)
    .wallets()
    .get({ id: walletId})
    .then(async (wallet: any) => {
        const response = await wallet.getAddress({ address: address});
        return res.send({
            status: 200,
            data: response
        });
    }).catch((err: any) => {
        return res.send(err)
    });
}

// Get all addresses on a single ulti-sig wallet on BitGo

export const allAddresses =async (req: Request, res: Response) => {
    const {asset, walletId } = req.query;

    bitgo
    .asset(asset as any)
    .wallets()
    .get({ id: walletId})
    .then((wallet: any) => {
        return wallet.addresses();
    })
    .then((address: any) => {
        console.log(address);
        return res.send({ status: 200, data: address})
    })
    .catch((err) => {
        res.send(err)
        console.log(err);
    });
}