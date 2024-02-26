const { SSMClient, GetParameterCommand } = require("@aws-sdk/client-ssm");
require("dotenv").config();
// Configure AWS with your access and secret key.
// The region is optional but it's recommended to set it.
const ssmClient = new SSMClient({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

let params = {
  Name: "meetdata" /* required */,
  WithDecryption: true,
};

const command = new GetParameterCommand(params);

ssmClient
  .send(command)
  .then((data) => console.log(data))
  .catch((err) => console.log(err, err.stack)); // an error occurred
