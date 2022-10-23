const express = require('express')
const app = express()
const port = 3000
const axios = require('axios')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/data', (req, res) => {
    res.send('data from zip')
    axios.get("https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=48843&key=AIzaSyC_2DWglQ07_Bbnc_p4GeWClyID9ZgDDIQ")
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.error(err);
    })
    res.send("done.");
    
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
