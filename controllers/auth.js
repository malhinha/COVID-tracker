const User = require('../models/user.js');
const Symptom = require('../models/symptom.js');
const router = require('express').Router();
const bcrypt = require('bcryptjs');
require('dotenv').config();
const SECRET = process.env.SECRET;
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth.js');

//CREATE
  router.post('/', async(req, res) => { /*change route name*/
    try{
      const createdUser = await User.create(req.body)
      res.status(200).json(createdUser)
    }catch(error){
      console.error(error)
      res.status(400).json({ message: error.message })
    }
  })
//READ
  /*Index*/
    router.get('/', async (req, res) => {
      try{
        const foundUsers = await User.find({})
        res.status(200).json(foundUsers)
      }catch(error){
        console.error(error)
        res.status(400).json({message: error.message})
      }
    });
    router.get('/login', async (req, res) => {
      try{
        const foundUsers = await User.find({})
        res.status(200).json(foundUsers)
      }catch(error){
        console.error(error)
        res.status(400).json({message: error.message})
      }
    });
    //@route POST api/auth
    //@desc Auth user
    router.post('/login', (req, res) => {
      const { email, password } = req.body;

      //validation
      if( !email || !password ){
        return (res.status(400).json({ message: 'Please enter all required fields' }));
      }

      //check for existing users
      User.findOne({ email })
        .then(user => {
          if(!user) return res.status(400).json({ message: 'User Does Not Exist'});

          //Validate Password
          bcrypt.compare(password, user.password)
            .then(isMatch => {
              if(!isMatch) return res.status(400).json({ message: 'Invalid Credentials'});

              jwt.sign(
                { id: user.id },/*payload*/
                SECRET,
                { expiresIn: 3600 },
                (err, token) => {
                  if(err) throw err;
                  res.json({
                    token,
                    user: {
                      id: user.id,
                      firstName: user.firstName,
                      lastName: user.lastName,
                      email: user.email,
                      state: user.location.state,
                    }
                  });
                }
              )
            })
        })
    });
//UPDATE
  router.put('/:id', async (req, res) => {
    try{
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
      res.status(200).json(updatedUser)
    }catch(error){
      console.error(error);
      res.status(400).json({ message: error.message })
    }
  })
//DELETE
router.delete('/:id', async (req, res) => {
  try{
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedUser);
  }catch(error){
    console.error(error);
    res.status(400).json({ message: error.message})
  }
});

//@route GET api/auth
//@desc Auth user
//@access private
router.get('/user', auth, (req, res) => {
  User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user));
});


module.exports = router;
