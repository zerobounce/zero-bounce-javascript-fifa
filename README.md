[ZeroBounce](https://www.zerobounce.net>) JavaScript API v2

This is a JavaScript wrapper class for the ZeroBounce API v2.
WE DO NOT RECOMMEND USING THIS SDK ON A FRONT-END ENVIRONMENT AS THE API KEY WILL BE VISIBLE

## INSTALLATION
To add the library to global node modules:
```bash
git clone
cd zero-bounce-javascript-fifa
npm run build 
npm link 
# create your new project
npm install @zerobounce/zero-bounce-sdk # this should install your locally compiled version
```

To only install it to your project node modules 
```bash
git clone
cd zero-bounce-javascript-fifa
npm run build 
```
Then add this dependency in your package.json:
```json
  "dependencies": {
    "@zerobounce/zero-bounce-sdk": "file:<PATH_TO_ZEROBOUNCE_JAVASCRIPT_FIFA_SDK>",
    ...
  }
```
Running ```npm install``` will install the library locally.

For a sample project see the sample subfolder on this repo.

## USAGE

Add the script

```HTML
<script src="<PATH_TO_SCRIPT/zeroBounceSDK.js"></script>
```

```HTML
<script>
const zeroBounce = new ZeroBounceSDK();
</script>
```

OR

Add npm module

```javascript
const ZeroBounceSDK = require('@zerobounce/zero-bounce-sdk')

const zeroBounce = new ZeroBounceSDK();
```

Initialize the sdk with your api key:

```javascript
zeroBounce.init("<YOUR_API_KEY>");
```

NOTE: all the methods are asynchronous they have to be used with async / await or .then.catch

## Validate an email address

```javascript
const email = "<EMAIL_ADDRESS>"; // The email address you want to validate
const ip_address = "127.0.0.1"; // The IP Address the email signed up from (Optional)

try {
  const response = await zeroBounce.validateEmail(email, ip_address);
} catch (error) {
  console.error(error);
}
```

## Development

After checking out the repo run tests

```bash
npm test
```

You should see an output like this

```bash
Test Suites: 1 passed, 1 total
Tests:       58 passed, 58 total
Snapshots:   0 total
Time:        2.596 s, estimated 3 s
Ran all test suites.
```
