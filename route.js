const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')


router.get('/rahul', function (req, res) {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    res.send({ data: arr })
})
router.get('/rahul/:mishra', function (req, res) {  //this is an example of path parameter == params
    let data = req.params.mishra //path params == params and hence we write req.params
    if (data == 2) {
        res.send(`The data is ${data}`) //here comes the logic part after taking the value from the params using req.params.mishra
    }
    else {
        res.send(`The data is ${data}`)
    }
})

router.get('/rahulmishra', function (req, res) {  //this is an example of path parameter == params
    let data = req.query    //this is query parameter and hence that is why we have used req.query here 
    let batch = data.functionUp
    let batch2 = data.frontend
    res.send({ batch2 : batch2})

})
router.post('/data', function (req, res) { 
    let details = req.body
    res.send({data : details})
})





module.exports = router