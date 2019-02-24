require('dotenv').config();
const express = require('express');
const app = express();
const Clarifai = require('clarifai');
const port = 3000;
const clarApp = new Clarifai.App({
    apiKey: process.env.CARIFAI_API
});
var HereMapsAPI = require('node-heremaps').default;
const image = "";



app.get('/', (req, res) => {
    var config = {
        app_id:   process.env.HERE_ID,
        app_code: process.env.HERE_CODE
    };
    var hmAPI = new HereMapsAPI(config);

    var geocodeParams = {
        "searchtext":    "121, Curtain Road, EC2A 3AD, London UK"
    };

    hmAPI.geocode(geocodeParams, function(err, result){
        console.log(result.Response.View[0]);
    });

    // clarApp.models.predict({id: 'SF_Landmarks', version: process.env.MODEL_VERSION}, {base64: image}).then(
    //     function(response) {
    //         console.log(response.outputs[0].data.concepts);
    //     },
    //     function(err) {
    //       console.log(err);
    //     }
    // );

    res.sendFile(__dirname + '/index.html');
});

app.use(express.static(__dirname + '/function.js'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`));