var express = require('express');
var bodyParser = require('body-parser');
var path    = require("path");

//var {database} = require('./db/database');
//var {User} = require('./models/user');

//var {main} = require('./models/user');

// Database Stuff -------------------------------------------------------------------
var mongoose = require('mongoose');
var mongoDB = 'mongodb://localhost:27017/Account';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    console.log("Connected to the Database")
})

var app = express();
var {Account} = require('./models/account');

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.listen(8081, () => {
    console.log('Started on port 8081');
});

// All Api Get and Posts -------------------------------------------------
app.get('/api', (req, res) => {
    var all_accounts = Account.find({}, function(err,list_accounts){
         if (err) throw err;
         res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({"all_accounts_list":list_accounts}));
     });
})

app.post('/api',function(req, res) {

    var _accountName = req.body.account_name

    var accountCodeTemp;
    function setAccountCode(accountname){
        if(accountname === "cash"){
             accountCodeTemp = 101
        }
        if(accountname === "office-equipments"){
            accountCodeTemp = 181
        }
        if(accountname === "notes-payable"){
            accountCodeTemp = 201
        }
        if(accountname === "delivery-fees"){
            accountCodeTemp = 401
        }
        if(accountname === "purchases"){
            accountCodeTemp = 501
        }
    };
    setAccountCode(_accountName)

    var accountNameTemp;
    function setAccountName(accountname){
        if(accountname === "cash"){
            accountNameTemp = "Cash"
        }
        if(accountname === "office-equipments"){
            accountNameTemp = "Office Equipments"
        }
        if(accountname === "notes-payable"){
            accountNameTemp = "Notes Payable"
        }
        if(accountname === "delivery-fees"){
            accountNameTemp = "Delivery Fees"
        }
        if(accountname === "purchases"){
            accountNameTemp = "purchases"
        }
    }
    setAccountName(_accountName)

    var normalSide = req.body.normal_side
    var accountStatus = req.body.account_status
    var initialBalance = req.body.initial_balance

    var new_account = new Account({
        accountCode:accountCodeTemp, 
        accountName:accountNameTemp,
        normalSide:normalSide,
        accountStatus:accountStatus,
        initialBalance:initialBalance
    });
    new_account.save(function(err){
        console.log(err);
    })
    res.end("yes");
})

app.get('/api/user', (req, res) => res.send('Get User'))

// POST /user 
// app.post('/user', (req, res) => {
//     var body = _.pick(req.body,['email','password']);
//     var user = new user(body);

//     user.save().then((user) =>{
//         res.send(user);
//     }).catch((e) =>{
//         res.status(400).send(e);
//     })
// });


module.exports = {app}