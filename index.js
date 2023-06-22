const express=require('express');
const getLocations = require('./square');
const app=express();
require('dotenv').config()
app.post('/',async(req, res)=>{
    console.log('headers',req.headers)
    console.log('body',req.body)
    res.send('Welcome');
})
app.get('/',async(req, res)=>{
    console.log('headers',req.headers)
    console.log('body',)
    res.send(getLocations());
})
const port=process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})