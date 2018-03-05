var express = require('express');
var bodyParser = require('body-parser');
var path    = require("path");
var jwt = require("jsonwebtoken");


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
var {Account} = require('./models/account');
var {User} = require('./models/user');


// Configuring our express server ----------------------------------------------------
var app = express();
app.set('secret', "mysupersecret")
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.listen(8081, () => {
    console.log('Started on port 8081');
});

// Create the express router wrapper to deal witht the token 
var apiRoutes = express.Router();
// secures routes that require token to access & decodes token
apiRoutes.use(function (req, res, next) {
    console.log("Request", req.body)
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (token) {
        jwt.verify(token, app.get('secret'), function (err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }
});

// x-access-token http header needs to be included from here
app.use('/api', apiRoutes);

// All Api Get and Posts -------------------------------------------------
// get all Account List in the Database
app.post('/api', (req, res) => {
    console.log("Api request", req.body)
    var all_accounts = Account.find({}, function(err,list_accounts){
         if (err) throw err;
         res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({"all_accounts_list":list_accounts}));
     });
})

// Create a new Account
app.post('/api/create',function(req, res) {
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

// ==========@@@@@========== All the helper Function =========@@@==========//
// Regexify the the email 
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
// Creating a array with list of permissions level ------------------
// We need to create a intranet page with only superUser 
//Access which will be me who can change the permission type
// helper function to get token for a user based on the username
const permissions = ['superUser', 'manager', 'accountant']
function getToken(username){
    const payload = {
        username: username
    };
    var token = jwt.sign(payload, app.get('secret'), {
        expiresIn: "300m" // expires in 5 hours
    });
    return {
        access : token,
        permission : "accountant"
    }
}

// secures routes that require token to access & decodes token
apiRoutes.use(function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (token) {
        jwt.verify(token, app.get('secret'), function (err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }
});

// All the user authentication and authorization stuff -------------------------
//User Login -----------------------------------
app.post('/login', (req, res) =>{
    const username = req.body.username
    const password = req.body.password
    const referer = req.headers.referer
    var redirect_url;
    
    if(username !== undefined && password !==undefined){
        User.find({email:username}, function(err,user){
            if (err) {
                throw err
            } else {
                if(password === user[0].password){
                    res.status(200).json({
                        "isLoggedIn": true,
                        "isValid":true,
                        "token":getToken(user.username)
                    })
                } else{
                    res.status(400).json({
                        "username":user.username,
                        "isLoggedIn":false,
                        "isValid":false
                    })
                }
            }

        });
    }else{
        res.status(400).json({
            "error": "Something is wrong with the username and Password"
        })
    }
})

// User signup 
app.post('/signup', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const password_twice = req.body.password_twice

    if(username !== undefined && password !== undefined && password_twice !== undefined){
        //validate stuff
        if(password !== password_twice){
            throw "Passwords does not match"
        } else if(validateEmail(username) && password === password_twice) {
            var current_user;
            User.find({email:username}, function(err, user){
                if (user){
                    current_user = user
                }
            })
            if (current_user){
                console.log("User already exists. Cannot Create a new ccount")
                throw "User already exists"
            } else {
                var new_user = new User({
                    email:username,
                    password: password,
                    tokens: getToken(username)
                })
                new_user.save()
                res.json({
                    valid:true,
                    username:new_user.username,
                    tokens:new_user.tokens
                })
            }
        }
    } else {
        console.log("Oh S#iT")
    }
})

app.post('/logout', (req, res) => {
    console.log(req.body)
    //invalidate the jwt token
    // res.json({
    //     valid:false,
    //     username: req.body.username,
    //     isLoggedIn:false
    // })
})


module.exports = {app}