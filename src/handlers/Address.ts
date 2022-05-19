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

