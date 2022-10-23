const express = require('express')
const app = express()
const port = 3000
const axios = require('axios')
var zip = 48843;

app.get('/', (req, res) => {
    res.send('data from zip')
    axios.get(`https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${zip}&key=AIzaSyC_2DWglQ07_Bbnc_p4GeWClyID9ZgDDIQ`)
    .then(response => {
        //log data in console
        console.log(response.data);
    })
    //check for error
    .catch(err => {
        console.error(err);
        //show status code if there is error
        res.sendStatus(500);
    })
    res.send("done.");
    //show status
    res.sendStatus(200);
  })
//listen port
app.listen(port, () => {
  console.log(`Local Politician app listening on port ${port}`)
})
