/*
    ____                  _               ____      _ _
  / ___|__ _  __ _  __ _| |_ __ _ _   _ / ___|__ _| (_)
 | |   / _` |/ _` |/ _` | __/ _` | | | | |   / _` | | |
 | |__| (_| | (_| | (_| | || (_| | |_| | |__| (_| | | |
  \____\__,_|\__, |\__,_|\__\__,_|\__, |\____\__,_|_|_|
             |___/                |___/

 Friday, July 29, 2016 1:30 PM
 http://cagataycali.xyz
 */
'use strict';
import AWS from 'aws-sdk';

module.exports = class Sender {
  constructor(config) {
    this.AWS = AWS.config.update(config.AWS);
    this.sns = new AWS.SNS({ apiVersion: '2010-03-31' });
    this.topicArn = config.topicArn;
  }
  /* Init */
  async init(AWSAccountId, Label) {
    const params = {
      AWSAccountId: [ /* required */
        AWSAccountId,
        /* more items */
      ],
      ActionName: [ /* required */
        'Publish',
        /* more items */
      ],
      Label, /* required */
      TopicArn: this.topicArn, /* required */
    };
    this.sns.addPermission(params, (err, data) => {
      if (err) console.log(err, err.stack);
      else console.log(data);
    });
  }
  /* Init */
  /* Create subscribe */
  async createSubscribe(Endpoint) {
    const subscribeParams = {
      Protocol: 'sms', /* required */
      TopicArn: this.topicArn, /* required */
      Endpoint,
    };
    this.sns.subscribe(subscribeParams, (err, data) => {
      if (err) console.log(err, err.stack); // an error occurred
      else console.log(data); // successful response
    });
  }
  /* Create subscribe */
  /* Publish sms */
  async sendSms(smsBody, Subject, isTopic, PhoneNumber = '') {
    let smsParams;
    if (isTopic) {
      smsParams = {
        Message: smsBody, /* required */
        MessageStructure: 'raw',
        // PhoneNumber: '+905054146201',
        Subject,
        TopicArn: this.topicArn, /* required */
      };
    } else {
      smsParams = {
        Message: smsBody, /* required */
        MessageStructure: 'raw',
        PhoneNumber,
        Subject,
      };
    }
    this.sns.publish(smsParams, (err, data) => {
      if (err) console.log(err, err.stack); // an error occurred
      else console.log(data);
    });
  }
  /* Publish sms */
};
