const express = require("express");
const router = express.Router();
const db = require('../config/database');
const Notification = require('../models/Notification')
const Patient = require('../models/Patient')

router.get('/', async (req, res)=>{
  try{
    const data = await Notification.findAll()
    return res.status(201).json(data)
  }
  catch(error) {
    return res.status(500).send(error.message);
  }
})

router.get( "/:id", (req, res) =>
    Notification.findByPk(req.params.id)
    .then( (result) => res.json(result))
    .catch(
        err => console.log(err)
    )
);

router.post('/',async (req, res)=> {
  try{
    const patient = await Patient.findByPk(req.body.userId)
    if(patient){
    const {title, description, status, health_worker} = req.body
    const post = await Notification.create({
      title, description, status, health_worker
    })
    return res.status(201).json(post)
  }
  }
    catch (error) {
    return res.status(500).send(error.message);
  }})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [ updated ] = await Notification.update(req.body, {
      where: { id: id }
    });
    if (updated) {
      const updatedPost = await Notification.findOne({ where: { id: id } });
      return res.status(200).json({ post: updatedPost });
    }
    throw new Error('Post not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
})

router.delete( "/:id", (req, res) =>
   Notification.destroy({
     where: {
       id: req.params.id
     }
   }).then( (result) => res.json(result) )
 )

module.exports = router;