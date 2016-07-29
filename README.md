# Installing

```
npm i aws-sms-send --save
```

# Using

Import
```
import Sender from 'aws-sms-send';
```

Config
```
const config = {
  AWS: {
    accessKeyId: 'xxxxxxxxxxx',
    secretAccessKey: 'xxxxxxxxxxx',
    region: 'xxxxxxxxxxx',
  },
  topicArn: 'xxxxxxxxxxx',
};
```

Runner class
```
class SenderRunner {
  async run() {
    const sender = new Sender(config);
    await sender.createSubscribe('+905054146201');
    // await sender.sendSms('Sms body direct', 'Direct sms', false, '+90 505 414 6201');
    await sender.sendSms('Sms body topic', 'Topic sms', true);
  }
}
```

Run runner
```
const main = new SenderRunner();
main.run().catch((error) => {
  console.log(error);
});
```

All in one
```
import Sender from 'aws-sms-send';

const config = {
  AWS: {
    accessKeyId: 'xxxxxxxxxxx',
    secretAccessKey: 'xxxxxxxxxxx',
    region: 'xxxxxxxxxxx',
  },
  topicArn: 'xxxxxxxxxxx',
};

class SenderRunner {
  async run() {
    const sender = new Sender(config);
    await sender.createSubscribe('+905054146201');
    // await sender.sendSms('Sms body direct', 'Direct sms', false, '+90 505 414 6201');
    await sender.sendSms('Sms body topic', 'Topic sms', true);
  }
}

const main = new SenderRunner();
main.run().catch((error) => {
  console.log(error);
});

```

# Using example in es6 with babel

Git clone,
cd path/dir,
npm i,
edit demo.js,
node start.js.


# Example package.json
Note: this lib working with es6
```
"dependencies": {
  "babel-core": "^6.4.5",
  "babel-polyfill": "^6.3.14",
  "babel-preset-node5": "^11.1.0",
  "babel-register": "^6.9.0",
  "babel-relay-plugin": "^0.9.2",
  "eslint-plugin-babel": "^3.3.0",
  "eslint-plugin-import": "^1.11.0",
  "eslint-plugin-jsx-a11y": "^2.0.1"
},
"devDependencies": {
  "babel-cli": "^6.10.1",
  "babel-core": "^6.10.4",
  "babel-eslint": "^6.1.2",
  "babel-polyfill": "^6.9.1",
  "babel-preset-es2015": "^6.9.0",
  "babel-preset-stage-3": "^6.11.0",
  "eslint": "^3.1.1",
  "eslint-config-airbnb": "^9.0.1",
  "eslint-plugin-react": "^5.2.2"
}
```


# Using without es6 - babel

[Aws send sms without es6 - babel demo](https://github.com/ccali14/aws-sms-send-demo)
