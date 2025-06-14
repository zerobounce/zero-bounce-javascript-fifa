
const ZeroBounceSDK = require('@zerobounce/zero-bounce-sdk-fifa')
const dotenv = require('dotenv');
dotenv.config();

const zeroBounce = new ZeroBounceSDK();
zeroBounce.init(process.env.ZEROBOUNCE_API_KEY); 

console.log(zeroBounce.showBaseURL()); 
console.log(process.env.ZEROBOUNCE_API_KEY);

const email = "piper1999.gary@gmail.com"; // The email address you want to validate
const ip_address = null; // The IP Address the email signed up from (Optional)

(async () => {
    try {
        response = await zeroBounce.validateEmail(email, ip_address);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
})();