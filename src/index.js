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
const AWS = require('aws-sdk');

module.exports = class Sender {
  constructor(config) {
    this.AWS = AWS.config.update(config.AWS);
    this.sns = new AWS.SNS({ apiVersion: '2010-03-31' });
    this.topicArn = config.topicArn;
  }
  init(AWSAccountId, Label) {
    return new Promise((resolve, reject) => {
      const params = {
        AWSAccountId: [
          AWSAccountId,
        ],
        ActionName: [
          'Publish',
        ],
        Label,
        TopicArn: this.topicArn,
      };
      this.sns.addPermission(params, (err, data) => {
        if (err) reject(err, err.stack);
        else resolve(data);
      });
    });
  }
  createSubscribe(Endpoint) {
    return new Promise((resolve, reject) => {
      const subscribeParams = {
        Protocol: 'sms',
        TopicArn: this.topicArn,
        Endpoint,
      };
      this.sns.subscribe(subscribeParams, (err, data) => {
        if (err) reject(err, err.stack);
        else resolve(data);
      });
    });
  }
  sendSms(smsBody, Subject, isTopic, PhoneNumber = '') {
    return new Promise((resolve, reject) => {
      let smsParams;
      if (isTopic) {
        smsParams = {
          Message: smsBody,
          MessageStructure: 'raw',
          Subject,
          TopicArn: this.topicArn,
        };
      } else {
        smsParams = {
          Message: smsBody,
          MessageStructure: 'raw',
          PhoneNumber,
          Subject,
        };
      }
      this.sns.publish(smsParams, (err, data) => {
        if (err) reject(err, err.stack);
        else resolve(data);
      });
    });
  }
};
