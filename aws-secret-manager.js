const {
  SecretsManagerClient,
  GetSecretValueCommand,
} = require("@aws-sdk/client-secrets-manager");

require("dotenv").config();

// Create a Secrets Manager client
const client = new SecretsManagerClient({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

async function getSecret() {
  const command = new GetSecretValueCommand({ SecretId: "meetAPIKey" });
  try {
    const data = await client.send(command);
    const secretString = data.SecretString;
    return secretString;
  } catch (error) {
    console.error(error);
  }
}

getSecret().then((secret) => console.log(secret));
