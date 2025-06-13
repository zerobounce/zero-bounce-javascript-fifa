
const ZeroBounceSDK = require('@zerobounce/zero-bounce-sdk')
const dotenv = require('dotenv');
dotenv.config();

const zeroBounce = new ZeroBounceSDK();
zeroBounce.init(process.env.ZEROBOUNCE_API_KEY); 
console.log(zeroBounce.showBaseURL()); 

const email = "piper1999.gary@gmail.com"; // The email address you want to validate
const ip_address = null; // The IP Address the email signed up from (Optional)
// const ip_address = "127.0.0.1"; // The IP Address the email signed up from (Optional)

(async () => {
    try {
        let response = await zeroBounce.getCredits();
        console.log(response);
        response = await zeroBounce.validateEmail(email, ip_address);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
})();