const User = require('../models/user.js');
const router = require('express').Router();


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
  router.post('/', async(req, res) => {
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
    })
    router.get('/login', async (req, res) => {
      try{
        const foundUsers = await User.find({})
        res.status(200).json(foundUsers)
      }catch(error){
        console.error(error)
        res.status(400).json({message: error.message})
      }
    })
//UPDATE


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
