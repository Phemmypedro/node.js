const { google } = require("googleapis");
const nodemailer = require("nodemailer");

// initialze google oauth2 authentication
const OAuth2 = google.auth.OAuth2;

const myOAuth2Client = new OAuth2(
  "348172767528-642mj3nds5vpp67tdgltrh9taqtrglcp.apps.googleusercontent.com",
  "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",
  "https://developers.google.com/oauthplayground"
);

myOAuth2Client.setCredentials({
  refresh_token:
    "1//04J1KNNFg82CrCgYIARAAGAQSNwF-L9IriP-Tei7t076NALpFcGiMXWPV44x6UHlz0OOU_lB6tZzWgK58WYUuClFjRmGjIm6sDCU",
});

const myAccessToken =
  "ya29.a0AfB_byDPtYzb9dag4hw7nd_pEHaQWoqyr5WmZpCRHkZDCLVk7Eyj3uXrA2eds3hdjfg5fhbQVoyZ2s3TjCXEF3HeQI3XsXoP8tYv07hJavwvaRW89dLw70olf27LU_058aUWFSijpJlVPg3-jM0lzyvJ6lBNdWYIBbcLaCgYKAbYSAQ8SFQHGX2MimzImxr3KFcHrJV52lyKHwg0171";

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: "femipedro0@gmail.com",
    clientId:
      "348172767528-642mj3nds5vpp67tdgltrh9taqtrglcp.apps.googleusercontent.com",
    clientSecret: "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",
    refreshToken:
      "1//04J1KNNFg82CrCgYIARAAGAQSNwF-L9IriP-Tei7t076NALpFcGiMXWPV44x6UHlz0OOU_lB6tZzWgK58WYUuClFjRmGjIm6sDCU",

    accessToken:
      "ya29.a0AfB_byDPtYzb9dag4hw7nd_pEHaQWoqyr5WmZpCRHkZDCLVk7Eyj3uXrA2eds3hdjfg5fhbQVoyZ2s3TjCXEF3HeQI3XsXoP8tYv07hJavwvaRW89dLw70olf27LU_058aUWFSijpJlVPg3-jM0lzyvJ6lBNdWYIBbcLaCgYKAbYSAQ8SFQHGX2MimzImxr3KFcHrJV52lyKHwg0171",
  },
});

module.exports = transport;
