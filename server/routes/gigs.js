const express = require("express");
const router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig')

router.get('/', (req, res)=>{
    Gig.findAll()
    .then(gigs =>{
        res.send(gigs)
    })
    .catch(
        err => console.log(err)
    )
})

router.get( "/:id", (req, res) =>
    Gig.findByPk(req.params.id)
    .then( (result) => res.json(result))
    .catch(
        err => console.log(err)
    )
);

router.post('/',async (req, res)=> {
  try{
    const post = await Gig.create({
      title: req.body.title,
      technologies: req.body.technologies,
      description: req.body.description,
      budget: req.body.budget,
      contact_email: req.body.contact_email
    })
    return res.status(201).json(post)
  }
    catch (error) {
    return res.status(500).send(error.message);
  }})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [ updated ] = await Gig.update(req.body, {
      where: { id: id }
    });
    if (updated) {
      const updatedPost = await Gig.findOne({ where: { id: id } });
      return res.status(200).json({ post: updatedPost });
    }
    throw new Error('Post not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
})

router.delete( "/:id", (req, res) =>
   Gig.destroy({
     where: {
       id: req.params.id
     }
   }).then( (result) => res.json(result) )
 )

module.exports = router;