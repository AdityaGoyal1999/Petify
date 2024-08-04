var express = require('express');
var router = express.Router();
require('dotenv').config();
const uri = process.env.MONGO_URI
var mongoose = require('mongoose')

mongoose.connect(uri)
  .then(() => console.log("Connected"))
  .catch(err => console.error(err))

const UserSchema = new mongoose.Schema({ name: String, email: String, password: String})
const User = mongoose.model('User', UserSchema);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', async (req, res, next) => {
  try{
    const data = req.body
    const newUser = new User({name: data.name, email: data.email, password: data.password})
    await newUser.save()
    res.status(200).json({"message": "User Created"})
  }
  catch(err) {
    res.status(500).json({"message": err})
  }
})

router.post('/login', async (req, res, next) => {
  try{
    const data = req.body;
    const user = await User.findOne({email: data.email });
    if (user){
      res.status(200).json({message: "Successful Login"})
    }
    else{
      res.status(400).json({message: "User not found"})
    }
  }
  catch(err){
    res.status(500).json({message: err})
  }
})
 
module.exports = router;
