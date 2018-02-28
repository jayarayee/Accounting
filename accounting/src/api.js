import axios from 'axios';

// Get all the Accounts
axios.get('localhost:3001/api').then(
    function(data){
        console.log(data)
    }
).catch(
    function(error){
        console.log(error)
    }
)

