var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var accountSchema = new Schema({
    accountCode:{
        type: Number,
        require: true,
    },
    accountName:{
        type:String,
        require: true
    },
    normalSide:{
        type: String,
        require:true,
    },
    accountStatus:{
        type : Boolean,
        require: true,
    },
    initialBalance:{
        type : Number,
        require: true
    }
});

var Account = mongoose.model('Account', accountSchema);


module.exports={Account};