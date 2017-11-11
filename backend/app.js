var express = require('express');
var mongoose= require('mongoose');
var passport= require('passport');
var session = require('express-session');
var morgan = require('morgan');
var bodyParser = require('body-parser');
//app
var app = express();
var User=require('./models/user')
var School = require('./models/schools');
var mentor = require('./models/mentor');
var available= require('./models/available');
var message = require('./models/messages');
app.use(passport.initialize());
app.use(passport.session());

//bodyParser and morgan
app.use(morgan('dev'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

//cors control
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});
//sessions
mongoose.connect('mongodb://root:abc123@ds157325.mlab.com:57325/insighthack');
app.use(session({
    secret: 'nsHacks2017', // session secret
    resave: true,
    saveUninitialized: true
}));

app.post('/signup', function(req, res) {
    var gentype="";
  if (!req.body.username || !req.body.password) {
    res.json({
      success: false,
      msg: 'Please pass username and password.'
    });
  } else {
    if(req.body.type === "mentor"){
    gentype="mentor";
    var newUser = new User({
      username: req.body.username,
      password: req.body.password,
      type:gentype
    });
    }
    else{
      gentype="school";
      var newUser = new User({
        username: req.body.username,
        password: req.body.password,
        type:gentype
      });
    }
    // save the user
    newUser.save(function(err) {
      if (err) {
        return res.json({
          success: false,
          msg: 'Username already exists.'
        });
      }

        if(gentype==="mentor"){
          var newmentor= new mentor({
            user:req.body.username,
            first:req.body.first,
            last:req.body.last,
            age:req.body.age,
            city:req.body.city,
            phone:req.body.phone,
            description: req.body.description,
            company:req.body.company

          })
          newmentor.save(function(err) {
            if (err) {
               res.json({
                success: false,
                msg: 'there was an error'
              });
            }
          });

        }
        else{
          var newSchool = new School({
            user: req.body.username,
            name: req.body.name,
            address: req.body.address,
            zipCode: req.body.zip,
            city:req.body.city,
            phoneNumber: req.body.phone
          })
          newSchool.save(function(err) {
            if (err) {
               res.json({
                success: false,
                msg: 'there was an error'
              });
            }
          });
        }
      res.json({
        success: true,
        msg: 'Successful created new user.'
      });
    });
  }
});

app.post('/signin', function(req, res) {
  User.findOne({
    username: req.body.username
  }, function(err, user) {
    if (err) throw err;
    console.log(user);
    if (!user) {
      console.log('Not user ')
      res.status(401).send({
        success: false,
        msg: 'Authentication failed. User not found.'
      });
    } else {
      // check if password matches
      if(user.password===req.body.password)
      {
          // if user is found and password is right create a toke
          // return the information including token as JSON
          if(user.type==="school"){
            School.findOne({
              user:user.username
            },function(err,school){
              if(err) res.json('error')
              else
              res.json({
                success: true,
                data: school
              });
            });
          }
          else{
            mentor.findOne({
              user:user.username
            },function(err,mentor){
              if(err) res.json('error')
              else
              res.json({
                success: true,
                data:mentor
              });
            })
          }
        } else {
          console.log('wrong pass')
          res.status(401).send({
            success: false,
            msg: 'Authentication failed. Wrong password.'
          });
        }
    }
  });
});

app.post('/search',function(req,res){
  if(req.body.type==="mentor"){
    School.search(req.body.field,function(err,results){
      if(err)
        return res.json({
          success:false,
          msg:"nothing was found"
        })
      return res.json({
        success:true,
        data:results
      })
    })
  } else  {
    mentor.search(req.body.field,function(err,results){
      if(err)
        return res.json({
          success:false,
          msg:"nothing was found"
        })
      return res.json({
        success:true,
        data:results
      })
    })
  }
})


app.post('/newavailable',function(req,res){
    var newAva= new available({
      username:req.body.username,
      date:req.body.date
    })
});

app.post('/getmessage',function(req,res){
  message.find({
    user:req.body.user
  },function(err,messages){
    if(err) return res.json({msg:'no messages'})
    else {
      res.json({succes:true,
      data: messages})
    }
  });
});
app.post('/newmessage',function(req,res){
  var newmessage = new message({
    user:req.body.username,
    message:req.body.message,
    to: req.body.to
  });
  newmessage.save(function(err) {
    if (err) {
      return res.json({
        success: false,
        msg: 'there was an error'
      });
    }
    res.json({
      success: true,
      msg: 'message sent'
    });
  });

});


//passport



app.listen(8080);
