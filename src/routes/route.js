const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const userModel = require('../moodels/userModel')


router.post('/createUser',  async function (req, res) { 
    let data = req.body
    let savedData = await userModel.create(data)
    res.send({msg : savedData})
})





module.exports = router