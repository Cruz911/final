const express = require("express");
const router = express.Router();
const db = require('../config/database');
const HealthWorker = require('../models/HealthWorker')

router.get('/', (req, res)=>{
    HealthWorker.findAll()
    .then(data =>{
        res.send(data)
    })
    .catch(
        err => console.log(err)
    )
})

router.get( "/:id", (req, res) =>
    HealthWorker.findByPk(req.params.id)
    .then( (result) => res.json(result))
    .catch(
        err => console.log(err)
    )
);

router.post('/',async (req, res)=> {
  try{
    const {first_name, last_name, email, role, admin, password} = req.body
    const post = await HealthWorker.create({
      first_name, last_name, email, role, admin, password
    })
    return res.status(201).json(post)
  }
    catch (error) {
    return res.status(500).send(error.message);
  }})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [ updated ] = await HealthWorker.update(req.body, {
      where: { id: id }
    });
    if (updated) {
      const updatedPost = await HealthWorker.findOne({ where: { id: id } });
      return res.status(200).json({ post: updatedPost });
    }
    throw new Error('Post not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
})

router.delete( "/:id", (req, res) =>
   HealthWorker.destroy({
     where: {
       id: req.params.id
     }
   }).then( (result) => res.json(result) )
 )

module.exports = router;