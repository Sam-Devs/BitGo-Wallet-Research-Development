# BitGo-Wallet-Research-Development

BitGo provides a simple and robust RESTful API and client SDK to integrate digital currency wallets with your application.

### GETTING STARTED
The idea of this project is to research and develop the basics of wallet functionalities on BitGo's wallet infrastruture.

In the following API Documentation, The BitGo SDK was used to create a REST API that can:
- Create, Update, Delete and get a Multi-Signature Wallet on BitGo.

- Transfer Crypto currencies from one wallet/address to another.

- Get all and single transactions as well as checking Transaction status.

- Get Spot/Total Balance of a wallet and an Address.
Create and Delete a wallet Webhook that sends notification whenever an event is fired.

### SETUP - GETTING STARTED
#### Production
- Create a production based BitGo enterprise Account on [BitGo](https://app.bitgo.com).

- After an account has been created successfully, Navigate to *Account Setting > Developer* Options to obtain a new *ACCESS TOKEN*, which will be used as a Bearer token to the header and also to Authenticate BitGo SDK during instance initialization.

- After obtaining your Access Token, create and add an environment variable name *ACCESS_TOKEN* and yout token as the value.

#### Test/Localhost
- Create a production based BitGo enterprise Account on [BitGo](https://app.bitgo-test.com).

- After successful creation of the account, Navigate to *Account Setting > Developer* Options to obtain a new *ACCESS TOKEN*, Which will be used as a Bearer token to the header and also to Authenticate BitGo SDK during instance initialization.

- After obtaining your Access Token, create and add an environment variable name *ACCESS_TOKEN* and yout token as the value.

### API DOC

#### Wallet
**Create, Update, Delete and get a Multi-Signature Wallet on BitGo**.

###### POST - Create Wallet
`http://localhost:8000/api/wallet`
Generate or Create a new Wallet
**Body**
```
{
    "coin": "tbtc",
    "label": "test wallet",
    "passphrase": "passphrase for test wallet"
}

```

**Response 200**
```
{
    "status": 200,
    "data": {
        "wallet": {
            "id": "6287ce93cd503300075ee728e200f7dd",
            "users": [
                {
                    "user": "62866f7f2525ce0008b8f25d2e2d1d37",
                    "permissions": [
                        "admin",
                        "view",
                        "spend"
                    ]
                }
            ],
            "coin": "tbtc",
            "label": "test wallet",
            "m": 2,
            "n": 3,
            "keys": [
                "6287ce9245b89c000777cd177abb22eb",
                "6287ce922208e20007acb068c1b6aafd",
                "6287ce928039630007056eef11c3133d"
            ],
            "keySignatures": {
                "backupPub": "203b2a2d40d34122d3a3a71344edd6dd553e7f26b303eb540fd7e52be4c5628a7a20a22084194938d204ddafafe678467a687c3fb6af5e5b6ec13f67ef53b4776f",
                "bitgoPub": "1f62770e28cb26b52a9b6f4872208eee29b912482732aab6e5bdf2fcb4168fd3364acce613a718cd4d6f3d91f40d09705d0189428ef7d3676eb0101c4f1d6c7265"
            },
            "tags": [
                "6287ce93cd503300075ee728e200f7dd"
            ],
            "disableTransactionNotifications": false,
            "freeze": {},
            "deleted": false,
            "approvalsRequired": 1,
            "isCold": false,
            "coinSpecific": {},
            "admin": {},
            "clientFlags": [],
            "walletFlags": [],
            "allowBackupKeySigning": false,
            "recoverable": false,
            "startDate": "2022-05-20T17:23:31.000Z",
            "type": "hot",
            "buildDefaults": {},
            "customChangeKeySignatures": {},
            "hasLargeNumberOfAddresses": false,
            "multisigType": "onchain",
            "config": {},
            "balance": 0,
            "confirmedBalance": 0,
            "spendableBalance": 0,
            "balanceString": "0",
            "confirmedBalanceString": "0",
            "spendableBalanceString": "0",
            "receiveAddress": {
                "id": "6287ce93cd503300075ee736a66939cb",
                "address": "2NEyic3CSJ5CammspkerANavCC4Rt48UGmT",
                "chain": 10,
                "index": 1,
                "coin": "tbtc",
                "wallet": "6287ce93cd503300075ee728e200f7dd",
                "coinSpecific": {
                    "redeemScript": "0020bd67a3d6002bc2e3764dd8666373603a0f6b7bf265b56884a9c699768bab60e9",
                    "witnessScript": "522103c49b537b945e088b8c1ad8fd8e0293d04cb181f727b891e874e70ef3f25e075821033515c61cb1cd7800fb14caa5aed9db8924cdab924d339f27c182933c052b6a0821035454e4591798873039d964887208e6632944cb86bd76de9a97bdb889eab25b2053ae"
                }
            },
            "pendingApprovals": []
        },
        "userKeychain": {
            "id": "6287ce9245b89c000777cd177abb22eb",
            "pub": "xpub661MyMwAqRbcF7w2ZByTxV6cYHCfnHpsAPAdXp3z1grjJ4ZqbcC5Zn5AjEB1VN2quLPjLES2Xeq3VQc18FLRrkSnnSYbLPGn5RE5Umr8tUE",
            "ethAddress": "0x996cb14731b81d67e8fe2756f370d2dc2496c7c9",
            "source": "user",
            "type": "independent",
            "encryptedPrv": "{\"iv\":\"r8CSGyft+ByFPFgiWc02xQ==\",\"v\":1,\"iter\":10000,\"ks\":256,\"ts\":64,\"mode\":\"ccm\",\"adata\":\"\",\"cipher\":\"aes\",\"salt\":\"0ognBkLd1dw=\",\"ct\":\"0BEL30OBVL8oq8nBVWnaUzfang1snfirwpniFcd0bfgaf6MZBJFxfRn+YKM7AWWR8QYZGi8WUP1e6CrdzaVgku9eZ8KtYZgYtIviAPD0XDOJ/XYBGrsrG0P+nqhWMLCJaIQstts2w/pD2Jnfb3q5ddYZ8dZMXpw=\"}",
            "prv": "xprv9s21ZrQH143K2drZTASTbM9szFNBNq71oAF2jReNTMKkRGEh44sq1ykgsxyA6BxpkbPjQvMytwWtoLmuRNbxnN61eniTaiTiMDBGd1UuCHW"
        },
        "backupKeychain": {
            "id": "6287ce922208e20007acb068c1b6aafd",
            "pub": "xpub661MyMwAqRbcG1zkdzZy9nqN3J4gJfcF5WLZrH5FXtYTRr5NQJH5Pk1ymPhv97heuzPv3fPTMueV1AjJYgG9mhosqc6xZxFhrPniqxra1Jk",
            "ethAddress": "0x60c127cbcf1df2ede0fe43d851b1ed236bbbfee5",
            "source": "backup",
            "type": "independent",
            "prv": "xprv9s21ZrQH143K3XvHXy2xnetdVGEBuCtPiHQy3tfdyZ1UZ3kDrkxpqwhVv8ze6xQvCVJ2DqDfoGrrqXEKdgsyKrKYpCmrpix9fzmXwNUurbX"
        },
        "bitgoKeychain": {
            "id": "6287ce928039630007056eef11c3133d",
            "pub": "xpub661MyMwAqRbcFzigVaa8mNjCTFGcLK6KtdvqGWJEnCCuGkVdrRBFh3uy1zyhUpGNfXhQ5ZVrbNnWtQAKHXogSyfiR4d31MydNDL9MvtnfNp",
            "ethAddress": "0x0028163de71764b3f82c170b78d2a503b1efd6be",
            "source": "bitgo",
            "type": "independent",
            "isBitGo": true
        },
        "warning": "Be sure to backup the backup keychain -- it is not stored anywhere else!"
    }
}

```
