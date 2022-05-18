const BitGoJS = require("bitgo");
import dotenv from "dotenv";
dotenv.config();

// Read the user authentication section to get your API access token
const bitgo = new BitGoJS.BitGo({
  env: "test",
  accessToken: process.env.ACCESS_TOKEN,
});
export default bitgo;
