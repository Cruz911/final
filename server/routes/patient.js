const express = require("express");
const Patient = require("../models/Patient");
const router = express.Router();

router.get('/', (req, res)=>{
    Patient.findAll()
    .then(data =>{
        res.send(data)
    })
    .catch(
        err => console.log(err)
    )
})

router.get( "/:id", (req, res) =>
    Patient.findByPk(req.params.id)
    .then( (result) => res.json(result))
    .catch(
        err => console.log(err)
    )
);

router.post('/',async (req, res)=> {
  try{
      const {first_name, last_name, email, password,sex, healthcentre, contact_email, phone_number,
    notifications, messages, allergies, viral_load, medications, appointments, address,
    district, aid, job
    } = req.body
    const post = await Patient.create({
        first_name, last_name, email, password,sex, healthcentre, contact_email, phone_number,
        notifications, messages, allergies, viral_load, medications, appointments, address,
        district, aid, job
    })
    return res.status(201).json(post)
  }
    catch (error) {
    return res.status(500).send(error.message);
  }})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [ updated ] = await Patient.update(req.body, {
      where: { id: id }
    });
    if (updated) {
      const updatedPost = await Patient.findOne({ where: { id: id } });
      return res.status(200).json({ post: updatedPost });
    }
    throw new Error('Post not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
})

router.delete( "/:id", (req, res) =>
   Patient.destroy({
     where: {
       id: req.params.id
     }
   }).then( (result) => res.json(result) )
 )

module.exports = router;