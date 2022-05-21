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

### POST - Create Wallet
`http://localhost:8000/api/wallet`

This API generates or creates a new Wallet

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
### GET - Get All Wallets

This API call gets all wallets creates on a particular account.

`http://localhost:8000/api/wallets`

**Example Request**
```
curl --location --request GET 'http://localhost:8000/api/wallets' \ --data-raw ''

```

**Response 200**
```
{
    "status": 200,
    "data": {
        "wallets": [
            {
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
                "startDate": "2022-05-20T17:23:31.000Z",
                "type": "hot",
                "buildDefaults": {},
                "customChangeKeySignatures": {},
                "hasLargeNumberOfAddresses": false,
                "multisigType": "onchain",
                "config": {}
            },
            {
                "id": "628672bb0f51760007f0d9bde1bb7234",
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
                "label": "wallet updated",
                "m": 2,
                "n": 3,
                "keys": [
                    "628672ba8266dc000766516a1377cbfa",
                    "628672b9dfcbbc00079d71b382b18070",
                    "628672badfcbbc00079d71d473970e63"
                ],
                "keySignatures": {
                    "backupPub": "1fd392f8057caf0751b330a85926ad5481ab93b9f30264b9d53a722c4b3f72f8d15d4951ed22fc160b5773f8f5bab9e8449a2f893ee9dcb07335792c6e711ce920",
                    "bitgoPub": "1fe0a4e907ff4aef0756b86bcf85153c81be999c5b97c02759f171d98c3a552da8580a68fe6efa2b9a5588f1eceef5534f18ef1b12282168d17bbc407befd0860c"
                },
                "tags": [
                    "628672bb0f51760007f0d9bde1bb7234"
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
                "startDate": "2022-05-19T16:39:23.000Z",
                "type": "hot",
                "buildDefaults": {},
                "customChangeKeySignatures": {},
                "hasLargeNumberOfAddresses": false,
                "multisigType": "onchain",
                "config": {}
            },
            {
                "id": "628671b802ee5100075f02154ccaa236",
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
                "label": "wallet 4",
                "m": 2,
                "n": 3,
                "keys": [
                    "628671b72525ce0008ba005193033668",
                    "628671b77cbbc400077dc9e88c7a029e",
                    "628671b74ab5b3000797f19be95c0de9"
                ],
                "keySignatures": {
                    "backupPub": "20ccd908cf2f4e34017d323696ddd59d1b7f42bccfdfd602f6a3fa1f7de4cbdfc62384fb4bb56b63f4a3f486847d0cb6e409d76996816f7fb0acb1a894bdc83494",
                    "bitgoPub": "1fb6a1bfbfcd2172398fff33474ea9883633a607802e7951b8a9bcd5d1c692667551683402fb94e993c2f800e62e212c8f258847d983a6816c13d6accccb2e8433"
                },
                "tags": [
                    "628671b802ee5100075f02154ccaa236"
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
                "startDate": "2022-05-19T16:35:04.000Z",
                "type": "hot",
                "buildDefaults": {},
                "customChangeKeySignatures": {},
                "hasLargeNumberOfAddresses": false,
                "multisigType": "onchain",
                "config": {}
            }
        ]
    }
}

```
### PUT - Update Wallet

This API call updates an existing multi-signature wallet on BitGo.

`http://localhost:8000/api/wallet?coin=tbtc&walletId=6287ce93cd503300075ee728e200f7dd
`

**Params**

Key                 Value

coin        |       tbtc

walletId    |       6287ce93cd503300075ee728e200f7dd

**Body**
```
{
    "label": "updated new test wallet"
}

```

**Response 200**
```
{
    "status": 200,
    "data": {
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
        "label": "updated new test wallet",
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
        "admin": {
            "policy": {
                "date": "2022-05-20T17:23:31.219Z",
                "id": "6287ce93cd503300075ee72daad8928b",
                "label": "default",
                "rules": [],
                "version": 0,
                "latest": true
            }
        },
        "clientFlags": [],
        "walletFlags": [],
        "allowBackupKeySigning": false,
        "startDate": "2022-05-20T17:23:31.000Z",
        "type": "hot",
        "buildDefaults": {},
        "customChangeKeySignatures": {},
        "hasLargeNumberOfAddresses": false,
        "multisigType": "onchain",
        "config": {}
    }
}

```
### GET - Get Single Wallet

This API gets a single wallet.

`http://localhost:8000/api/wallet?coin=tbtc&walletId=6287ce93cd503300075ee728e200f7dd`

**Params**

Key                 Value

coin        |       tbtc

walletId    |       6287ce93cd503300075ee728e200f7dd

**Example Request**

```
curl --location --request GET 'http://localhost:8000/api/wallet?coin=tbtc&walletId=6287ce93cd503300075ee728e200f7dd' \
--data-raw ''

```

**Response 200**
```
{
    "status": 200,
    "data": {
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
        "label": "updated new test wallet",
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
        "admin": {
            "policy": {
                "date": "2022-05-20T17:23:31.219Z",
                "id": "6287ce93cd503300075ee72daad8928b",
                "label": "default",
                "rules": [],
                "version": 0,
                "latest": true
            }
        },
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
    }
}
```
### DEL - Delete Wallet

This API call deletes an existing wallet.

`http://localhost:8000/api/wallet?coin=tbtc&walletId=6287ce93cd503300075ee728e200f7dd`

**Params**

Key                 Value

coin        |       tbtc

walletId    |       6287ce93cd503300075ee728e200f7dd

**Example Request**

```
curl --location --request DELETE 'http://localhost:8000/api/wallet?coin=tbtc&walletId=6287ce93cd503300075ee728e200f7dd' \
--data-raw ''

```

**Response 200**
```
{
    "status": 200,
    "data": {
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
        "label": "updated new test wallet",
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
        "deleted": true,
        "approvalsRequired": 1,
        "isCold": false,
        "coinSpecific": {},
        "admin": {
            "policy": {
                "date": "2022-05-20T17:23:31.219Z",
                "id": "6287ce93cd503300075ee72daad8928b",
                "label": "default",
                "rules": [],
                "version": 0,
                "latest": true
            }
        },
        "clientFlags": [],
        "walletFlags": [],
        "allowBackupKeySigning": false,
        "startDate": "2022-05-20T17:23:31.000Z",
        "type": "hot",
        "buildDefaults": {},
        "customChangeKeySignatures": {},
        "hasLargeNumberOfAddresses": false,
        "multisigType": "onchain",
        "config": {}
    }
}
```

### Address

**Create, Update, Delete and get an Address on a multi-signature wallet on BitGo**.
### POST - Create Address

This API creates a new address on an existing multi-sig wallet at BitGo. The endpoint receives two query parameter **coin** and **walletId** to get an existing wallet won BitGo and created a new wallet address on that wallet.

`http://localhost:8000/api/address?coin=tbtc&walletId=628672bb0f51760007f0d9bde1bb7234`


**Params**

Key                 Value
coin        |       tbtc

walletId    |       628672bb0f51760007f0d9bde1bb7234

**Body**
```
{
    "label": "wallet updated address 1"
}

```

**Response 200**
```
{
    "status": 200,
    "data": {
        "id": "628672bb0f51760007f0d9bde1bb7234",
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
        "label": "wallet updated",
        "m": 2,
        "n": 3,
        "keys": [
            "628672ba8266dc000766516a1377cbfa",
            "628672b9dfcbbc00079d71b382b18070",
            "628672badfcbbc00079d71d473970e63"
        ],
        "keySignatures": {
            "backupPub": "1fd392f8057caf0751b330a85926ad5481ab93b9f30264b9d53a722c4b3f72f8d15d4951ed22fc160b5773f8f5bab9e8449a2f893ee9dcb07335792c6e711ce920",
            "bitgoPub": "1fe0a4e907ff4aef0756b86bcf85153c81be999c5b97c02759f171d98c3a552da8580a68fe6efa2b9a5588f1eceef5534f18ef1b12282168d17bbc407befd0860c"
        },
        "tags": [
            "628672bb0f51760007f0d9bde1bb7234"
        ],
        "disableTransactionNotifications": false,
        "freeze": {},
        "deleted": false,
        "approvalsRequired": 1,
        "isCold": false,
        "coinSpecific": {},
        "admin": {
            "policy": {
                "date": "2022-05-19T16:39:23.113Z",
                "id": "628672bb0f51760007f0d9c2c1999b18",
                "label": "default",
                "rules": [],
                "version": 0,
                "latest": true
            }
        },
        "clientFlags": [],
        "walletFlags": [],
        "allowBackupKeySigning": false,
        "recoverable": false,
        "startDate": "2022-05-19T16:39:23.000Z",
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
            "id": "628672bb0f51760007f0d9cb4d8e735b",
            "address": "2N2vgyAL7C6JHo9FK6rJD7PHbtvmjyg8yjg",
            "chain": 10,
            "index": 1,
            "coin": "tbtc",
            "wallet": "628672bb0f51760007f0d9bde1bb7234",
            "coinSpecific": {
                "redeemScript": "00201ef936be8350677d5be26fd3ce771154a80af7e5bbfb1313ab6b3cbb4ad22ab4",
                "witnessScript": "522102fd5fc0cf22d4befe05aed806a1604bedc37eb18a1113393babd77f418e749cb72103ef884188445ecf2223fcf3757bdbbd1560cb4620c6b5714de64ebb068ea46c802103e18d32a2f53981573f73fd793e7ad617b156c2a0660ffc64c0f84a8091ea694553ae"
            }
        },
        "pendingApprovals": []
    }
}
```
### PUT - Update Address

This API updates a receive address on a wallet

`http://localhost:8000/api/address?coin=tbtc&walletId=628672bb0f51760007f0d9bde1bb7234&address=2N2vgyAL7C6JHo9FK6rJD7PHbtvmjyg8yjg`

**Params**
Key                 Value

coin        |       tbtc

walletId    |       628672bb0f51760007f0d9bde1bb7234

address     |       2N2vgyAL7C6JHo9FK6rJD7PHbtvmjyg8yjg

**Body**
```
{
    "label": "wallet updated address"
}

```

**Example Request**
```
curl --location --request PUT 'http://localhost:8000/api/address?coin=tbtc&walletId=628672bb0f51760007f0d9bde1bb7234&address=2N2vgyAL7C6JHo9FK6rJD7PHbtvmjyg8yjg' \
--header 'Content-Type: application/json' \
--data-raw '{
    "label": "wallet updated address"
}'
```

**Response 200**
```
{
    "status": 200,
    "data": {
        "id": "628672bb0f51760007f0d9cb4d8e735b",
        "address": "2N2vgyAL7C6JHo9FK6rJD7PHbtvmjyg8yjg",
        "chain": 10,
        "index": 1,
        "coin": "tbtc",
        "wallet": "628672bb0f51760007f0d9bde1bb7234",
        "label": "wallet updated address",
        "coinSpecific": {
            "redeemScript": "00201ef936be8350677d5be26fd3ce771154a80af7e5bbfb1313ab6b3cbb4ad22ab4",
            "witnessScript": "522102fd5fc0cf22d4befe05aed806a1604bedc37eb18a1113393babd77f418e749cb72103ef884188445ecf2223fcf3757bdbbd1560cb4620c6b5714de64ebb068ea46c802103e18d32a2f53981573f73fd793e7ad617b156c2a0660ffc64c0f84a8091ea694553ae"
        },
        "balance": {
            "balance": 0,
            "balanceString": "0",
            "totalReceived": 0,
            "totalSent": 0,
            "confirmedBalanceString": "0",
            "spendableBalanceString": "0"
        }
    }
}

```
### GET - Single Address

This API call gets a receive a particular address.

`http://localhost:8000/api/address?coin=tbtc&walletId=628672bb0f51760007f0d9bde1bb7234&address=2N2vgyAL7C6JHo9FK6rJD7PHbtvmjyg8yjg`

**Params**
Key                 Value

coin        |       tbtc

walletId    |       628672bb0f51760007f0d9bde1bb7234

address     |       2N2vgyAL7C6JHo9FK6rJD7PHbtvmjyg8yjg

**Example Request**
```
curl --location --request GET 'http://localhost:8000/api/address?coin=tbtc&walletId=628672bb0f51760007f0d9bde1bb7234&address=2N2vgyAL7C6JHo9FK6rJD7PHbtvmjyg8yjg'

```

**Response 200**
```
{
    "status": 200,
    "data": {
        "id": "628672bb0f51760007f0d9cb4d8e735b",
        "address": "2N2vgyAL7C6JHo9FK6rJD7PHbtvmjyg8yjg",
        "chain": 10,
        "index": 1,
        "coin": "tbtc",
        "wallet": "628672bb0f51760007f0d9bde1bb7234",
        "label": "wallet updated address",
        "coinSpecific": {
            "redeemScript": "00201ef936be8350677d5be26fd3ce771154a80af7e5bbfb1313ab6b3cbb4ad22ab4",
            "witnessScript": "522102fd5fc0cf22d4befe05aed806a1604bedc37eb18a1113393babd77f418e749cb72103ef884188445ecf2223fcf3757bdbbd1560cb4620c6b5714de64ebb068ea46c802103e18d32a2f53981573f73fd793e7ad617b156c2a0660ffc64c0f84a8091ea694553ae"
        },
        "balance": {
            "balance": 0,
            "balanceString": "0",
            "totalReceived": 0,
            "totalSent": 0,
            "confirmedBalanceString": "0",
            "spendableBalanceString": "0"
        }
    }
}

```
### GET - All Addresses

An API call gets all receive addresses.

`http://localhost:8000/api/addresses?coin=tbtc&walletId=628672bb0f51760007f0d9bde1bb7234`

**Params**
Key                 Value
coin        |       tbtc

walletId    |       628672bb0f51760007f0d9bde1bb7234

**Example Request**
```
curl --location --request GET 'http://localhost:8000/api/addresses?coin=tbtc&walletId=628672bb0f51760007f0d9bde1bb7234'

```

**Response 200**
```
{
    "status": 200,
    "data": {
        "coin": "tbtc",
        "totalAddressCount": 4,
        "addresses": [
            {
                "id": "628672bb0f51760007f0d9cb4d8e735b",
                "address": "2N2vgyAL7C6JHo9FK6rJD7PHbtvmjyg8yjg",
                "chain": 10,
                "index": 1,
                "coin": "tbtc",
                "wallet": "628672bb0f51760007f0d9bde1bb7234",
                "label": "wallet updated address",
                "coinSpecific": {
                    "redeemScript": "00201ef936be8350677d5be26fd3ce771154a80af7e5bbfb1313ab6b3cbb4ad22ab4",
                    "witnessScript": "522102fd5fc0cf22d4befe05aed806a1604bedc37eb18a1113393babd77f418e749cb72103ef884188445ecf2223fcf3757bdbbd1560cb4620c6b5714de64ebb068ea46c802103e18d32a2f53981573f73fd793e7ad617b156c2a0660ffc64c0f84a8091ea694553ae"
                }
            },
            {
                "id": "6288036280396300071db0b2ae46a312",
                "address": "2N8ZXeJ2twhL21dDkBZVW2gL29VYgeJn3p5",
                "chain": 10,
                "index": 2,
                "coin": "tbtc",
                "wallet": "628672bb0f51760007f0d9bde1bb7234",
                "label": "wallet updated address 2",
                "coinSpecific": {
                    "redeemScript": "0020e32e262faf66fa7602ba9e187aba0d707cc9e86e77d316a72bf485c4f8ac4191",
                    "witnessScript": "522103bfd8c9fe88fe89560fd9c986b512fe8f672f66381eba41d8c91246272504d8d42103032ce053571d9f07dfd194f521e5b07b24865db27d229edba8e139173a539c922102554d96f5e5cee08f1af1d22e3c672c0bdb5e559fc18ee0b9da316d39fa55364f53ae"
                }
            },
            {
                "id": "628803692208e20007c50f7943abaaf6",
                "address": "2NFdSjjPYSWmEjucNqxpN46GhQDk6R1Dy1c",
                "chain": 10,
                "index": 3,
                "coin": "tbtc",
                "wallet": "628672bb0f51760007f0d9bde1bb7234",
                "label": "wallet updated address 3",
                "coinSpecific": {
                    "redeemScript": "0020ba49dbc590a70cbe1d74a233965bf49027996e621f5603de4aaa3e2b0fef3ebf",
                    "witnessScript": "522102a55c294770bc92d41898d6c46064444e69d68e90cede76ec834726a4ea4a10bd2102458ddcefb69d84298c52e5ed2a35b597c65a81e24c2a2205f2db50645bad86662103c7933dff10d843ed5c360ef61476e9d3bee43ef139e013780fd7f15f174a641453ae"
                }
            },
            {
                "id": "6288036f45b89c0007901652483c9fa3",
                "address": "2Muu2RW591fcB7z5wTCFAGgr2iGWBqxoVt9",
                "chain": 10,
                "index": 4,
                "coin": "tbtc",
                "wallet": "628672bb0f51760007f0d9bde1bb7234",
                "label": "wallet updated address 4",
                "coinSpecific": {
                    "redeemScript": "002087b2bfe17a095f4e6c1719155eb45f80e89f0252ad6be0433a08bcf99d77248b",
                    "witnessScript": "5221031d97b3be0ca13fa4edf4a92f8dda44075011d84e072a37abcc4f8d666a1f0cb02103549cf62d1fcbb4a5291c61ccbea6194cf8b2941be587882ff9d546506f98f64f210394152ac3e04321c28d1b37e69c134d85f2fb926051a2fff5dc2f2050ee95eb6653ae"
                }
            }
        ],
        "count": 4
    }
}
```

### Transfer

**Transfer, Transaction Status, Get All Transfers and Get a single Transaction on a multi-signature wallet on BitGo**.
### GET - Transaction Status

This API checks the status of a particular transaction. The Transaction status returns the following statuses:

- Signed
- Unconfirmed
- Confirmed

`http://localhost:8000/api/transaction-status?coin=tbtc&walletId=62892ea3d4e2b7000755df541b7764c6&transferId=90e0aa034e62bf7f5b27faa92d1121c3e54191a4d3fb281342b0c50904483fed`


**Params**

KEY                 Value

coin        |       tbtc

walletId    |       62892ea3d4e2b7000755df541b7764c6

transferId  |      90e0aa034e62bf7f5b27faa92d1121c3e54191a4d3fb281342b0c50904483fed

**Example Request**
```
curl --location --request GET 'http://localhost:8000/api/transaction-status?coin=tbtc&walletId=62892ea3d4e2b7000755df541b7764c6&transferId=90e0aa034e62bf7f5b27faa92d1121c3e54191a4d3fb281342b0c50904483fed'

```

**Response 200**
```
{
    "status": 200,
    "transaction_status": "confirmed"
}
```
### POST - Transfer

This API send cryptocurrency to a destination address.

**NB**: The wallet passphrase is required and should corresponds to the exact phrase of the wallet.

`http://localhost:8000/api/transfer?coin=tbtc&walletId=62892ea3d4e2b7000755df541b7764c6`

**Params**

Key         |       Value

coin        |       tbtc

walletId    |       62892ea3d4e2b7000755df541b7764c6

**Body**
```
{
    "amount": 0.0001,
    "address": "2Mwkw6XxyVfpx5Mk1J64mcc1KAsD7nwjoXH",
    "walletPassphrase": "passphrase for test wallet"
}

```

**Example Request**
```
curl --location --request POST 'http://localhost:8000/api/transfer?coin=tbtc&walletId=62892ea3d4e2b7000755df541b7764c6' \
--header 'Content-Type: application/json' \
--data-raw '{
    "amount": 0.0001,
    "address": "2Mwkw6XxyVfpx5Mk1J64mcc1KAsD7nwjoXH",
    "walletPassphrase": "passphrase for test wallet"
}'

```

**Response 200**
```
{
    "status": 200,
    "data": {
        "transfer": {
            "entries": [
                {
                    "address": "2NERGHQ3b8a1E6byYWtJdSRvk5DowmM6KPk",
                    "wallet": "62892ea3d4e2b7000755df541b7764c6",
                    "value": -72000,
                    "valueString": "-72000"
                },
                {
                    "address": "2Mwkw6XxyVfpx5Mk1J64mcc1KAsD7nwjoXH",
                    "value": 10000,
                    "valueString": "10000",
                    "isChange": false,
                    "isPayGo": false
                },
                {
                    "address": "2NAvVnS86ayNkgu7zW1AD2NLbxCK455Gsdq",
                    "wallet": "62892ea3d4e2b7000755df541b7764c6",
                    "value": 61783,
                    "valueString": "61783",
                    "isChange": true,
                    "isPayGo": false
                }
            ],
            "id": "62894243d23fd70007338e392d7169e9",
            "coin": "tbtc",
            "wallet": "62892ea3d4e2b7000755df541b7764c6",
            "walletType": "hot",
            "txid": "0e55c2d75a78fdbbb1fc8eb7ad434fb39b323c86be2d51893b0b92d9888f8f34",
            "height": 999999999,
            "heightId": "999999999-62894243d23fd70007338e392d7169e9",
            "date": "2022-05-21T19:49:24.963Z",
            "type": "send",
            "value": -10217,
            "valueString": "-10217",
            "baseValue": -10000,
            "baseValueString": "-10000",
            "feeString": "217",
            "payGoFee": 0,
            "payGoFeeString": "0",
            "usd": -3.0087409846,
            "usdRate": 29448.38,
            "state": "signed",
            "instant": false,
            "isReward": false,
            "isFee": false,
            "tags": [
                "62892ea3d4e2b7000755df541b7764c6"
            ],
            "history": [
                {
                    "date": "2022-05-21T19:49:24.961Z",
                    "action": "signed"
                },
                {
                    "date": "2022-05-21T19:49:23.900Z",
                    "user": "62892d2e1eaabc00070bce670e77679f",
                    "action": "created"
                }
            ],
            "signedDate": "2022-05-21T19:49:24.961Z",
            "vSize": 214,
            "signedTime": "2022-05-21T19:49:24.961Z",
            "createdTime": "2022-05-21T19:49:23.900Z"
        },
        "txid": "0e55c2d75a78fdbbb1fc8eb7ad434fb39b323c86be2d51893b0b92d9888f8f34",
        "tx": "01000000000101ed3f480409c5b0421328fbd3a49141e5c321112da9fa275b7fbf624e03aae0900000000023220020b216fd0cc184f5d2f7c6e6638a10501e9c17833a438e265c93d467f8a07082c9ffffffff02102700000000000017a914317ee18d9360400c3a3541652ddd1f7f3bcda4db8757f100000000000017a914c1e78be1a532012d0be12da293af10f3b1b08c97870400473044022031c31afe2b8044fa4686971b61023c13402ce52403665ac171343e08cdc44ef302206aa917e5e5cf913f25daef5503e3888279fc82f72a81f23e44d40e74d3f4c83501473044022057049a12a24f8f65784a3532a26d1e8e41285091fc5d2b83b69fd19f88ab9e8302200e6139a0b28cbb7a482c1cfe54147b266671c63c9ec71118d41c822cceadea130169522103f24ce9f85a57177104d1869fb51ed6d5c13174c8c870011204de4b19c1aa5a5c210249046fdc0b14c23e252b611bb271deffab126404b1e782e2180d0f7b620b9c862102e699346498d59321323f4d1c0a99711721314e1b14dc832f796a67378f58d66853ae5dfa2100",
        "status": "signed"
    }
}

```
### GET - All Transfer

This API returns deposits and withdrawals for a wallet. Transfers are sorted in descending order by *height*, then *id*. Transfers with *rejected* and *pendingApproval* states are excluded by default.

`http://localhost:8000/api/transfers?coin=tbtc&walletId=62892ea3d4e2b7000755df541b7764c6`

**Params**

Key             Value
coin        |   tbtc
walletId    |   62892ea3d4e2b7000755df541b7764c6

**Example Request**
```
curl --location --request GET 'http://localhost:8000/api/transfers?coin=tbtc&walletId=62892ea3d4e2b7000755df541b7764c6' \
--data-raw ''

```

**Response 200**
```
{
    "status": 200,
    "data": {
        "coin": "tbtc",
        "transfers": [
            {
                "entries": [
                    {
                        "address": "2Mwkw6XxyVfpx5Mk1J64mcc1KAsD7nwjoXH",
                        "wallet": "62892ea81eaabc00070c755442c59015",
                        "value": 10000,
                        "valueString": "10000",
                        "isChange": false,
                        "isPayGo": false
                    },
                    {
                        "address": "2NAvVnS86ayNkgu7zW1AD2NLbxCK455Gsdq",
                        "wallet": "62892ea3d4e2b7000755df541b7764c6",
                        "value": 61783,
                        "valueString": "61783",
                        "isChange": true,
                        "isPayGo": false
                    },
                    {
                        "address": "2NERGHQ3b8a1E6byYWtJdSRvk5DowmM6KPk",
                        "wallet": "62892ea3d4e2b7000755df541b7764c6",
                        "value": -72000,
                        "valueString": "-72000",
                        "isChange": false,
                        "isPayGo": false
                    }
                ],
                "id": "62894243d23fd70007338e392d7169e9",
                "coin": "tbtc",
                "wallet": "62892ea3d4e2b7000755df541b7764c6",
                "walletType": "hot",
                "txid": "0e55c2d75a78fdbbb1fc8eb7ad434fb39b323c86be2d51893b0b92d9888f8f34",
                "height": 2226782,
                "heightId": "002226782-62894243d23fd70007338e392d7169e9",
                "date": "2022-05-21T19:53:28.000Z",
                "confirmations": 11,
                "type": "send",
                "value": -10217,
                "valueString": "-10217",
                "baseValue": -10000,
                "baseValueString": "-10000",
                "feeString": "217",
                "payGoFee": 0,
                "payGoFeeString": "0",
                "usd": -3.0051895554,
                "usdRate": 29413.62,
                "state": "confirmed",
                "instant": false,
                "isReward": false,
                "isFee": false,
                "tags": [
                    "62892ea3d4e2b7000755df541b7764c6"
                ],
                "history": [
                    {
                        "date": "2022-05-21T19:53:28.000Z",
                        "action": "confirmed",
                        "comment": null
                    },
                    {
                        "date": "2022-05-21T19:49:44.343Z",
                        "action": "unconfirmed",
                        "comment": null
                    },
                    {
                        "date": "2022-05-21T19:49:24.961Z",
                        "action": "signed"
                    },
                    {
                        "date": "2022-05-21T19:49:23.900Z",
                        "user": "62892d2e1eaabc00070bce670e77679f",
                        "action": "created"
                    }
                ],
                "signedDate": "2022-05-21T19:49:24.961Z",
                "vSize": 214,
                "usersNotified": true,
                "confirmedTime": "2022-05-21T19:53:28.000Z",
                "unconfirmedTime": "2022-05-21T19:49:44.343Z",
                "signedTime": "2022-05-21T19:49:24.961Z",
                "createdTime": "2022-05-21T19:49:23.900Z",
                "label": "",
                "outputs": [
                    {
                        "id": "0e55c2d75a78fdbbb1fc8eb7ad434fb39b323c86be2d51893b0b92d9888f8f34:0",
                        "address": "2Mwkw6XxyVfpx5Mk1J64mcc1KAsD7nwjoXH",
                        "value": 10000,
                        "valueString": "10000",
                        "blockHeight": 2226782,
                        "date": "2022-05-21T19:53:28.000Z",
                        "wallet": "62892ea81eaabc00070c755442c59015",
                        "chain": 10,
                        "index": 1,
                        "redeemScript": "0020bec0ab5f71c8f964e41db9312d96127ee68d3804241ee59cd81272ee483df51f",
                        "isSegwit": true
                    },
                    {
                        "id": "0e55c2d75a78fdbbb1fc8eb7ad434fb39b323c86be2d51893b0b92d9888f8f34:1",
                        "address": "2NAvVnS86ayNkgu7zW1AD2NLbxCK455Gsdq",
                        "value": 61783,
                        "valueString": "61783",
                        "blockHeight": 2226782,
                        "date": "2022-05-21T19:53:28.000Z",
                        "wallet": "62892ea3d4e2b7000755df541b7764c6",
                        "chain": 11,
                        "index": 1,
                        "redeemScript": "0020d62d7d26e33d07ec7b7a930626c9662a6581e8cb8951f00e0c71e2e17838e84f",
                        "isSegwit": true
                    }
                ],
                "inputs": [
                    {
                        "id": "90e0aa034e62bf7f5b27faa92d1121c3e54191a4d3fb281342b0c50904483fed:0",
                        "address": "2NERGHQ3b8a1E6byYWtJdSRvk5DowmM6KPk",
                        "value": 72000,
                        "valueString": "72000",
                        "wallet": "62892ea3d4e2b7000755df541b7764c6",
                        "chain": 10,
                        "index": 1,
                        "redeemScript": "0020b216fd0cc184f5d2f7c6e6638a10501e9c17833a438e265c93d467f8a07082c9",
                        "isSegwit": true
                    }
                ]
            },
            {
                "entries": [
                    {
                        "address": "2NERGHQ3b8a1E6byYWtJdSRvk5DowmM6KPk",
                        "wallet": "62892ea3d4e2b7000755df541b7764c6",
                        "value": 72000,
                        "valueString": "72000",
                        "isChange": false,
                        "isPayGo": false
                    },
                    {
                        "address": "tb1qav20pryq7cvcwxrhsl5pzja7mm8n7ywq4ysuhh",
                        "value": 1170478153,
                        "valueString": "1170478153",
                        "isChange": false,
                        "isPayGo": false
                    },
                    {
                        "address": "tb1qctu3twdvy0sh8xqea59llywfqaltnc0sdk0n90",
                        "value": -1170550295,
                        "valueString": "-1170550295",
                        "isChange": false,
                        "isPayGo": false
                    }
                ],
                "id": "62893ac5a565b100071079b7bc60393d",
                "coin": "tbtc",
                "wallet": "62892ea3d4e2b7000755df541b7764c6",
                "walletType": "hot",
                "txid": "90e0aa034e62bf7f5b27faa92d1121c3e54191a4d3fb281342b0c50904483fed",
                "height": 2226774,
                "heightId": "002226774-62893ac5a565b100071079b7bc60393d",
                "date": "2022-05-21T19:25:41.000Z",
                "confirmations": 19,
                "type": "receive",
                "value": 72000,
                "valueString": "72000",
                "baseValue": 72000,
                "baseValueString": "72000",
                "feeString": "142",
                "payGoFee": 0,
                "payGoFeeString": "0",
                "usd": 21.2240304,
                "usdRate": 29477.82,
                "state": "confirmed",
                "instant": false,
                "isReward": false,
                "isFee": false,
                "tags": [
                    "62892ea3d4e2b7000755df541b7764c6"
                ],
                "history": [
                    {
                        "date": "2022-05-21T19:25:41.000Z",
                        "action": "confirmed",
                        "comment": null
                    },
                    {
                        "date": "2022-05-21T19:17:24.399Z",
                        "action": "unconfirmed",
                        "comment": null
                    },
                    {
                        "date": "2022-05-21T19:17:24.399Z",
                        "action": "created",
                        "comment": null
                    }
                ],
                "usersNotified": true,
                "confirmedTime": "2022-05-21T19:25:41.000Z",
                "unconfirmedTime": "2022-05-21T19:17:24.399Z",
                "createdTime": "2022-05-21T19:17:24.399Z",
                "label": "",
                "outputs": [
                    {
                        "id": "90e0aa034e62bf7f5b27faa92d1121c3e54191a4d3fb281342b0c50904483fed:0",
                        "address": "2NERGHQ3b8a1E6byYWtJdSRvk5DowmM6KPk",
                        "value": 72000,
                        "valueString": "72000",
                        "blockHeight": 2226774,
                        "date": "2022-05-21T19:25:41.000Z",
                        "wallet": "62892ea3d4e2b7000755df541b7764c6",
                        "chain": 10,
                        "index": 1,
                        "redeemScript": "0020b216fd0cc184f5d2f7c6e6638a10501e9c17833a438e265c93d467f8a07082c9",
                        "isSegwit": true
                    },
                    {
                        "id": "90e0aa034e62bf7f5b27faa92d1121c3e54191a4d3fb281342b0c50904483fed:1",
                        "address": "tb1qav20pryq7cvcwxrhsl5pzja7mm8n7ywq4ysuhh",
                        "value": 1170478153,
                        "valueString": "1170478153",
                        "blockHeight": 2226774,
                        "date": "2022-05-21T19:25:41.000Z",
                        "isSegwit": false
                    }
                ],
                "inputs": [
                    {
                        "id": "0e52c3b48355343ba8b5368ee34f57150c33dd6ae15d4be4b9f91cf365a9a82f:0",
                        "address": "tb1qctu3twdvy0sh8xqea59llywfqaltnc0sdk0n90",
                        "value": 1170550295,
                        "valueString": "1170550295",
                        "isSegwit": false
                    }
                ]
            }
        ]
    }
}

```
### GET - Single Transfer 

A transfer is a wallet specific object. Each transfer will only output the respective wallet id which the transfer is associated with.

`http://localhost:8000/api/transfer?coin=tbtc&walletId=62892ea3d4e2b7000755df541b7764c6&transferId=0e55c2d75a78fdbbb1fc8eb7ad434fb39b323c86be2d51893b0b92d9888f8f34`

**Params**

Key             Value

coin        |     tbtc

walletId    |      62892ea3d4e2b7000755df541b7764c6

transferId  |   0e55c2d75a78fdbbb1fc8eb7ad434fb39b323c86be2d51893b0b92d9888f8f34

**Example Request**
```
curl --location --request GET 'http://localhost:8000/api/transfer?coin=tbtc&walletId=62892ea3d4e2b7000755df541b7764c6&transferId=0e55c2d75a78fdbbb1fc8eb7ad434fb39b323c86be2d51893b0b92d9888f8f34' \
--data-raw ''

```

**Response 200**
```
{
    "status": 200,
    "data": {
        "entries": [
            {
                "address": "2Mwkw6XxyVfpx5Mk1J64mcc1KAsD7nwjoXH",
                "value": 10000,
                "valueString": "10000",
                "isChange": false,
                "isPayGo": false
            },
            {
                "address": "2NAvVnS86ayNkgu7zW1AD2NLbxCK455Gsdq",
                "wallet": "62892ea3d4e2b7000755df541b7764c6",
                "value": 61783,
                "valueString": "61783",
                "isChange": true,
                "isPayGo": false
            },
            {
                "address": "2NERGHQ3b8a1E6byYWtJdSRvk5DowmM6KPk",
                "wallet": "62892ea3d4e2b7000755df541b7764c6",
                "value": -72000,
                "valueString": "-72000",
                "isChange": false,
                "isPayGo": false
            }
        ],
        "id": "62894243d23fd70007338e392d7169e9",
        "coin": "tbtc",
        "wallet": "62892ea3d4e2b7000755df541b7764c6",
        "walletType": "hot",
        "txid": "0e55c2d75a78fdbbb1fc8eb7ad434fb39b323c86be2d51893b0b92d9888f8f34",
        "height": 2226782,
        "heightId": "002226782-62894243d23fd70007338e392d7169e9",
        "date": "2022-05-21T19:53:28.000Z",
        "confirmations": 11,
        "type": "send",
        "value": -10217,
        "valueString": "-10217",
        "baseValue": -10000,
        "baseValueString": "-10000",
        "feeString": "217",
        "payGoFee": 0,
        "payGoFeeString": "0",
        "usd": -3.0051895554,
        "usdRate": 29413.62,
        "state": "confirmed",
        "instant": false,
        "isReward": false,
        "isFee": false,
        "tags": [
            "62892ea3d4e2b7000755df541b7764c6"
        ],
        "history": [
            {
                "date": "2022-05-21T19:53:28.000Z",
                "action": "confirmed",
                "comment": null
            },
            {
                "date": "2022-05-21T19:49:44.343Z",
                "action": "unconfirmed",
                "comment": null
            },
            {
                "date": "2022-05-21T19:49:24.961Z",
                "action": "signed"
            },
            {
                "date": "2022-05-21T19:49:23.900Z",
                "user": "62892d2e1eaabc00070bce670e77679f",
                "action": "created"
            }
        ],
        "signedDate": "2022-05-21T19:49:24.961Z",
        "vSize": 214,
        "usersNotified": true,
        "confirmedTime": "2022-05-21T19:53:28.000Z",
        "unconfirmedTime": "2022-05-21T19:49:44.343Z",
        "signedTime": "2022-05-21T19:49:24.961Z",
        "createdTime": "2022-05-21T19:49:23.900Z",
        "outputs": [
            {
                "id": "0e55c2d75a78fdbbb1fc8eb7ad434fb39b323c86be2d51893b0b92d9888f8f34:0",
                "address": "2Mwkw6XxyVfpx5Mk1J64mcc1KAsD7nwjoXH",
                "value": 10000,
                "valueString": "10000",
                "blockHeight": 2226782,
                "date": "2022-05-21T19:53:28.000Z",
                "wallet": "62892ea81eaabc00070c755442c59015",
                "chain": 10,
                "index": 1,
                "redeemScript": "0020bec0ab5f71c8f964e41db9312d96127ee68d3804241ee59cd81272ee483df51f",
                "isSegwit": true
            },
            {
                "id": "0e55c2d75a78fdbbb1fc8eb7ad434fb39b323c86be2d51893b0b92d9888f8f34:1",
                "address": "2NAvVnS86ayNkgu7zW1AD2NLbxCK455Gsdq",
                "value": 61783,
                "valueString": "61783",
                "blockHeight": 2226782,
                "date": "2022-05-21T19:53:28.000Z",
                "wallet": "62892ea3d4e2b7000755df541b7764c6",
                "chain": 11,
                "index": 1,
                "redeemScript": "0020d62d7d26e33d07ec7b7a930626c9662a6581e8cb8951f00e0c71e2e17838e84f",
                "isSegwit": true
            }
        ],
        "inputs": [
            {
                "id": "90e0aa034e62bf7f5b27faa92d1121c3e54191a4d3fb281342b0c50904483fed:0",
                "address": "2NERGHQ3b8a1E6byYWtJdSRvk5DowmM6KPk",
                "value": 72000,
                "valueString": "72000",
                "wallet": "62892ea3d4e2b7000755df541b7764c6",
                "chain": 10,
                "index": 1,
                "redeemScript": "0020b216fd0cc184f5d2f7c6e6638a10501e9c17833a438e265c93d467f8a07082c9",
                "isSegwit": true
            }
        ],
        "label": ""
    }
}

```
