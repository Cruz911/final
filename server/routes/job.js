const express = require("express");
const router = express.Router();
const db = require('../config/database');
const Job = require('../models/Job')

router.get('/', (req, res)=>{
    Job.findAll()
    .then(data =>{
        res.send(data)
    })
    .catch(
        err => console.log(err)
    )
})

router.get( "/:id", (req, res) =>
    Job.findByPk(req.params.id)
    .then( (result) => res.json(result))
    .catch(
        err => console.log(err)
    )
);

router.post('/',async (req, res)=> {
  try{
    const {title, description, status } = req.bod
    const post = await Job.create({
      title, description, status 
    })
    return res.status(201).json(post)
  }
    catch (error) {
    return res.status(500).send(error.message);
  }})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [ updated ] = await Job.update(req.body, {
      where: { id: id }
    });
    if (updated) {
      const updatedPost = await Job.findOne({ where: { id: id } });
      return res.status(200).json({ post: updatedPost });
    }
    throw new Error('Post not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
})

router.delete( "/:id", (req, res) =>
   Job.destroy({
     where: {
       id: req.params.id
     }
   }).then( (result) => res.json(result) )
 )

module.exports = router;