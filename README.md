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
coin | tbtc
walletId | 6287ce93cd503300075ee728e200f7dd

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
coin | tbtc
walletId | 6287ce93cd503300075ee728e200f7dd

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
coin | tbtc
walletId | 6287ce93cd503300075ee728e200f7dd

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
`http://localhost:8000/api/address?coin=tbtc&walletId=628672bb0f51760007f0d9bde1bb7234`


This API creates a new address on an existing multi-sig wallet at BitGo. The endpoint receives two query parameter **coin** and **walletId** to get an existing wallet won BitGo and created a new wallet address on that wallet.

**Params**
coin | tbtc
walletId | 628672bb0f51760007f0d9bde1bb7234

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
coin | tbtc
walletId | 628672bb0f51760007f0d9bde1bb7234
address  | 2N2vgyAL7C6JHo9FK6rJD7PHbtvmjyg8yjg

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
coin | tbtc
walletId | 6287ce93cd503300075ee728e200f7dd

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

An API call used to get a single wallet.

`http://localhost:8000/api/wallet?coin=tbtc&walletId=6287ce93cd503300075ee728e200f7dd`

**Params**
coin | tbtc
walletId | 6287ce93cd503300075ee728e200f7dd

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

This API call is used to delete an existing wallet.

`http://localhost:8000/api/wallet?coin=tbtc&walletId=6287ce93cd503300075ee728e200f7dd`

**Params**
coin | tbtc
walletId | 6287ce93cd503300075ee728e200f7dd

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
