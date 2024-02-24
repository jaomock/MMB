var express = require('express');
var router = express.Router();

const messages = [
  {
    text:"Hi there!",
    user:"Amando",
    added:new Date()
  },
  {
    text:"Hello WORLD!!!",
    user:"Charles",
    added:new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages:messages });
});

router.get('/new', function(req,res,next){
  res.render('form')
})

router.post('/new', function(req,res,next){
  let msg = req.body.msg
  let username = req.body.username
  messages.push({text:msg, user:username, added:new Date()})
  res.redirect('/')
})

module.exports = router;