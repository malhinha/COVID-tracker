const User = require('../models/user.js');
const Symptom = require('../models/symptom.js');
const router = require('express').Router();
const bcrypt = require('bcryptjs');
require('dotenv').config();
const jwt = require('jsonwebtoken');


//Seed route <---example for testing
router.get('/seed', (req, res) => {
  User.create({
    username: "superman",
    email: "superman@gmail.com",
    password: "passwordtest",
    zipCode: "05101",
    doctorName: "doctortest",
    providerLocation: "123 Main St"
  })
})
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
    //@route POST api/users/register
    //@desc Register a new user
    router.post('/register', (req, res) => {
      const { firstName, lastName, email, password, dateOfBirth, zipCode } = req.body;

      //validation
      if(!firstName || !lastName || !email || !password){
        return (res.status(400).json({ message: 'Please enter all required fields' }));
      }

      //check for existing users
      User.findOne({ email })
        .then(user => {
          if(user) return res.status(400).json({ message: 'User already exists'});

          const newUser = new User ({
            firstName,
            lastName,
            email,
            password,
            dateOfBirth,
            zipCode
          });

          //Create salt & hash
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if(err) throw err;
              newUser.password = hash;
              newUser.save()
                .then(user => {
                  jwt.sign(
                    { id: user.id },/*payload*/
                    'covid_myJwtSecret',/*To-Do Change secret and switch to env variable*/
                    { expiresIn: 3600 },/*To-Do Change expiration to 3600 | used shorter time for testing*/
                    (err, token) => {
                      if(err) throw err;
                      res.json({
                        token,
                        user: {
                          id: user.id,
                          firstName: user.firstName,
                          lastName: user.lastName,
                          email: user.email
                        }
                      });
                    }
                  )
                })
            })
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
})


module.exports = router;
