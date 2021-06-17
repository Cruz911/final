const express = require("express");
const router = express.Router();
const db = require('../config/database');
const HealthCentre = require('../models/HealthCentre')

router.get('/', (req, res)=>{
    HealthCentre.findAll()
    .then(data =>{
        res.send(data)
    })
    .catch(
        err => console.log(err)
    )
})

router.get( "/:id", (req, res) =>
    HealthCentre.findByPk(req.params.id)
    .then( (result) => res.json(result))
    .catch(
        err => console.log(err)
    )
);

router.post('/',async (req, res)=> {
  try{
    const {name, email, password, workers, district} = req.body
    const post = await HealthCentre.create({
      name, email, password, workers, district
    })
    return res.status(201).json(post)
  }
    catch (error) {
    return res.status(500).send(error.message);
  }})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [ updated ] = await HealthCentre.update(req.body, {
      where: { id: id }
    });
    if (updated) {
      const updatedPost = await HealthCentre.findOne({ where: { id: id } });
      return res.status(200).json({ post: updatedPost });
    }
    throw new Error('Post not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
})

router.delete( "/:id", (req, res) =>
   HealthCentre.destroy({
     where: {
       id: req.params.id
     }
   }).then( (result) => res.json(result) )
 )

module.exports = router;