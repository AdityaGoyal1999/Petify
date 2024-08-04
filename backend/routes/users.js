var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')
require('dotenv').config();
const uri = process.env.MONGO_URI
var mongoose = require('mongoose')
var secret = process.env.TOKEN_SECRET
const bcrypt = require('bcrypt');

mongoose.connect(uri)
  .then(() => console.log("Connected"))
  .catch(err => console.error(err))

const UserSchema = new mongoose.Schema({ name: String, email: String, password: String})
const User = mongoose.model('User', UserSchema);


async function hashPassword(password) {
  const saltRounds = 5;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', async (req, res, next) => {
  try{
    const data = req.body
    console.log(hashPassword(data.password))
    const newUser = new User({name: data.name, email: data.email, password: await hashPassword(data.password)})
    await newUser.save()

    const token = jwt.sign({ name: data.name, email: data.email }, secret, {expiresIn : "1hr"});
    res.status(200).json({"message": "User Created", "token": token});
  }
  catch(err) {
    res.status(500).json({"message": err})
  }
})

router.post('/login', async (req, res, next) => {
  try{
    const data = req.body;
    const user = await User.findOne({email: data.email });
    
    if (!user){
      res.status(400).json({message: "User not found"})
    }
    else{
      const isMatched = bcrypt.compare(data.password, user.password);
      if (isMatched){
        const token = jwt.sign({ name: data.name, email: data.email }, secret, {expiresIn : "1hr"});
        res.status(200).json({message: "Successful Login", "token": token});
      }
      else{
        res.status(400).json({ message: "Wrong Password"});
      }
    }
  }
  catch(err){
    res.status(500).json({message: err})
  }
})
 
module.exports = router;
