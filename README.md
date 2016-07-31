# Let's save your :heavy_dollar_sign:

> **The problem:**
Classic Amazon – pricing is immediately at Wal-Mart levels. Sending an SMS message is a mere 0.0075 cents.  Want to push notify 1 million end-points. Well that’s a 1. All of this quantity 1 for the lowly guy with a credit card. To get this SMS pricing level at Twilio, you’ve got to already be sending 500k text messages a month.  The difference doesn’t sound like much. What’s 0.0025 amongst friends.**But at the 500k message level that’s a savings of $1,250 a month.!**
> check out the :sparkles:  [**Original article**](https://www.chriskranky.com/the-threat-from-below-amazon-aws/)

> [**AWS sms pricing**](https://aws.amazon.com/sns/sms-pricing/)  :+1:

> [**Also twilio using AWS sms service**](https://www.twilio.com/press/releases/release-aws-sns)
[![Code Climate](https://codeclimate.com/github/svtek/aws-sms-send/badges/gpa.svg)](https://codeclimate.com/github/svtek/aws-sms-send)
[![GitHub issues](https://img.shields.io/github/issues/svtek/aws-sms-send.svg?style=flat-square)](https://github.com/svtek/aws-sms-send/issues)[![GitHub stars](https://img.shields.io/github/stars/svtek/aws-sms-send.svg?style=flat-square)](https://github.com/svtek/aws-sms-send/stargazers)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/svtek/aws-sms-send.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)

[![NPM](https://nodei.co/npm/aws-sms-send.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/aws-sms-send/)
# Installing

```
npm i aws-sms-send --save
```

# Demo

[Aws send sms without es6 - babel demo :ok_hand:](https://github.com/ccali14/aws-sms-send-demo)

# Using Example

```
var Sender = require('aws-sms-send');
var config = {
  AWS: {
    accessKeyId: 'xxxxxxxxxx',
    secretAccessKey: 'xxxxxxxxxx',
    region: 'xxxxxxxxxx',
  },
  topicArn: 'xxxxxxxxxx',
};

var sender = new Sender(config);

/* Create subscribe */
// sender.createSubscribe('+905054146201').then(function(response) {
//   console.log(response);
// });

/* Send topic sms */
// sender.sendSms('Sms body topic', 'Topic sms', true).then(function(response) {
//   console.log(response);
// });

/* Send direct sms */
// sender.sendSms('Sms body direct', 'Topic sms', false, '+905054146201').then(function(response) {
//   console.log(response);
// });
```

![GIF](https://github.com/svtek/aws-sms-send/blob/master/aws.gif)

Maintenance & Development [Çağatay Çalı](http://github.com/ccali14)
