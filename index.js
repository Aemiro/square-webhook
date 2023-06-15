const express=require('express')
const app=express();
require('dotenv').config()
app.post('/square-webhook',async(req, res)=>{
    console.log('headers',req.headers)
    console.log('body',req.body)
    res.send('Welcome');
})
app.get('/square-webhook',async(req, res)=>{
    console.log('headers',req.headers)
    console.log('body',req.body)
    res.send('Welcome');
})
const port=process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})