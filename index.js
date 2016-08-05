'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var AWS = require('aws-sdk');

module.exports = function () {
  function Sender(config) {
    _classCallCheck(this, Sender);

    this.AWS = AWS.config.update(config.AWS);
    this.sns = new AWS.SNS({ apiVersion: '2010-03-31' });
    this.topicArn = config.topicArn;
  }

  _createClass(Sender, [{
    key: 'init',
    value: function init(AWSAccountId, Label) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        var params = {
          AWSAccountId: [AWSAccountId],
          ActionName: ['Publish'],
          Label: Label,
          TopicArn: _this.topicArn
        };
        _this.sns.addPermission(params, function (err, data) {
          if (err) reject(err, err.stack);else resolve(data);
        });
      });
    }
  }, {
    key: 'createSubscribe',
    value: function createSubscribe(Endpoint) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        var subscribeParams = {
          Protocol: 'sms',
          TopicArn: _this2.topicArn,
          Endpoint: Endpoint
        };
        _this2.sns.subscribe(subscribeParams, function (err, data) {
          if (err) reject(err, err.stack);else resolve(data);
        });
      });
    }
  }, {
    key: 'sendSms',
    value: function sendSms(smsBody, Subject, isTopic) {
      var _this3 = this;

      var PhoneNumber = arguments.length <= 3 || arguments[3] === undefined ? '' : arguments[3];

      return new Promise(function (resolve, reject) {
        var smsParams = void 0;
        if (isTopic) {
          smsParams = {
            Message: smsBody,
            MessageStructure: 'raw',
            Subject: Subject,
            TopicArn: _this3.topicArn
          };
        } else {
          smsParams = {
            Message: smsBody,
            MessageStructure: 'raw',
            PhoneNumber: PhoneNumber,
            Subject: Subject
          };
        }
        _this3.sns.publish(smsParams, function (err, data) {
          if (err) reject(err, err.stack);else resolve(data);
        });
      });
    }
  }]);

  return Sender;
}();
