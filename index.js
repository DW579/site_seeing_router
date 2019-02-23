require('dotenv').config();
const express = require('express');
const app = express();
const Clarifai = require('clarifai');
const port = 3000;
const clarApp = new Clarifai.App({
    apiKey: process.env.CARIFAI_API
   });

app.get('/', (req, res) => {
    console.log(clarApp);
    res.send(clarApp);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));