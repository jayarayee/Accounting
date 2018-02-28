// const MongoClint = require('mongodb').MongoClient;


// var mongoDb = MongoClint.connect('mongodb://localhost:27017/Account', (err, clint) =>{
//     if(err){
//         return console.log('Unable to connect to the database');
//     }
//     console.log('Connected to Mongodb server');
//     const db = clint.db('Account');

//     db.collection('Account').insertOne({
//         "accountCode": 105,
//         "accountName": "Cash",
//         "normalSide" : "left",
//         "accountStatus":"active",
//         "initialBalance" : "1000"
//     },
     
//         (err, result) => {
//         if(err){
//             return console.log('Unable to insert the account', err);
//         }
//         console.log(JSON.stringify(result.ops, undefined, 2))
//     });
 
// clint.close();
// });
