const express = require("express");
const router = express.Router();
const db = require('../config/database');
const Medication = require('../models/Medication')

router.get('/', (req, res)=>{
    Medication.findAll()
    .then(data =>{
        res.send(data)
    })
    .catch(
        err => console.log(err)
    )
})

router.get( "/:id", (req, res) =>
    Medication.findByPk(req.params.id)
    .then( (result) => res.json(result))
    .catch(
        err => console.log(err)
    )
);

router.post('/',async (req, res)=> {
  try{
    const {title, description, status, health_worker} = req.body
    const post = await Medication.create({
      title, description, status, health_worker
    })
    return res.status(201).json(post)
  }
    catch (error) {
    return res.status(500).send(error.message);
  }})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [ updated ] = await Medication.update(req.body, {
      where: { id: id }
    });
    if (updated) {
      const updatedPost = await Medication.findOne({ where: { id: id } });
      return res.status(200).json({ post: updatedPost });
    }
    throw new Error('Post not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
})

router.delete( "/:id", (req, res) =>
   Medication.destroy({
     where: {
       id: req.params.id
     }
   }).then( (result) => res.json(result) )
 )

module.exports = router;