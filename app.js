const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: process.env.AMAZON_ACCESS_KEY_ID,
  secretAccessKey: process.env.AMAZON_SECRET_ACCESS_KEY,
  // TODO: Adjust your region
  region: 'eu-central-1'
});

const sns = new AWS.SNS();
function sendSMS(cb) {
    sns.publish({
        Message: "Hi, this is a short message sent with AWS SNS",
        // TODO: Add your phone number here
        PhoneNumber: "",
        MessageAttributes: {
            'AWS.SNS.SMS.SenderID' : {
              DataType : 'String',
              // TODO: Add a sender id here
              StringValue: 'I\'m the sender'
            }
          }
    }, cb)
}

sendSMS((err, res) => {
    console.log(err, res);
});