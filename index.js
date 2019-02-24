require('dotenv').config();
const express = require('express');
const app = express();
const Clarifai = require('clarifai');
const port = 3000;
const clarApp = new Clarifai.App({
    apiKey: process.env.CARIFAI_API
   });
const image = "";

app.get('/', (req, res) => {
    clarApp.models.predict({id: 'SF_Landmarks', version: process.env.MODEL_VERSION}, {base64: image}).then(
        function(response) {
            console.log(response.outputs[0].data.concepts);
        },
        function(err) {
          console.log(err);
        }
    );

    res.send("Main page");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));