const Symptom = require('../models/symptom.js');
const User = require('../models/user.js');
const router = require('express').Router();
const auth = require('../middleware/auth.js');

//SEED ROUTE
  router.get('/seed2', (req, res) => {
    Symptom.create({
      smellOrTaste: true,
      headache: true,
      fever: true,
      exposedHow: "Came in contact with friend who tested positive."
    })
  })

//CREATE
//@route POST api/symptoms
//@desc create a symptom
//@access private
router.post('/', auth, async(req, res) => {
  try{
    const createdSymptom = await Symptom.create(req.body)
    const updatedUser = await User.findByIdAndUpdate(req.body.user, {$addToSet: { symptoms: createdSymptom._id }}, {new: true});
    res.status(200).json(createdSymptom)
  }catch(error){
    console.error(error)
      res.status(400).json({ message: error.message })
  }
})


//READ
  /*Index*/
    router.get('/', async (req, res) => {
      try{
        const foundSymptoms = await Symptom.find({})
        res.status(200).json(foundSymptoms)
      }catch(error){
        console.error(error);
        res.status(400).json({ message: error.message });
      }
    })
  /*Show*/
    router.get('/:id', async (req, res) => {
      try{
        const foundSymptom = await Symptom.findById(req.params.id)
        res.status(200).json(foundSymptom)
      }catch(error){
        console.error(error);
        res.status(400).json({ message: error.message });
      }
    })
//UPDATE
  /*update*/
    router.put('/:id', async (req, res) => {
      try{
        const updatedSymptom = await Symptom.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedSymptom)
      }catch(error){
        console.error(error);
        res.status(400).json({ message: error.message })
      }
    })
//DELETE
  router.delete('/:id', async (req, res) => {
    try{
      const deletedSymptom = await Symptom.findByIdAndDelete(req.params.id)
      res.status(200).json(deletedSymptom)
    }catch(error){
      console.error(error);
      res.status(400).json({ message: error.message})
    }
  })







module.exports = router;
