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
