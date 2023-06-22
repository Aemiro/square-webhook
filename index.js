const express=require('express');
const {getLocations, getToken} = require('./square');
const app=express();
require('dotenv').config()
app.use(express.json())
app.post('/',async(req, res)=>{
    console.log('headers',req.headers)
    console.log('body',req.body)
    res.send('Welcome');
})
app.get('/',async(req, res)=>{
  try {
    console.log('headers',req.headers)
    console.log('body',)
    res.send(getLocations());
  } catch (error) {
    res.status(500).json({error: error.message})
  }
    
})
app.post('/api/User/GetSquareToken',async(req, res)=>{
  try {
    console.log('headers',req.headers)
    console.log('body',req.body)
    res.send(await getToken(req.body));
  } catch (error) {
    res.status(500).json({error: error.message})
  }
    
})
app.post('/api/User/RefreshSquareAccessToken', async (req, res)=>{

})
const port=process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})