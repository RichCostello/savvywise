const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const twitters = require("./routes/api/twitters");

const AWS = require('aws-sdk');
const fs = require('fs');
const app = express();

// configure the keys for accessing AWS
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

var s3 = new AWS.S3();


//configuring parameters
var params = {
  Bucket: 'savvywise',

};

// Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// App routes
app.use("/api/twitters", twitters);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is listening bitches on ${port}`));
