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
Create a production based BitGo enterprise Account on [BitGo](https://app.bitgo.com).

After an account has been created successfully, Navigate to Account Setting > Developer Options to obtain a new ACCESS TOKEN, which will be used as a Bearer token to the header and also to Authenticate BitGo SDK during instance initialization.

After obtaining your Access Token, create and add an environment variable name ACCESS_TOKEN and yout token as the value.

Test/Localhost
Create a production based BitGo enterprise Account on [BitGo](https://app.bitgo-test.com).

After successful creation of the account, Navigate to Account Setting > Developer Options to obtain a new ACCESS TOKEN, Which will be used as a Bearer token to the header and also to Authenticate BitGo SDK during instance initialization.
After obtaining your Access Token, create and add an environment variable name ACCESS_TOKEN and yout token as the value.

