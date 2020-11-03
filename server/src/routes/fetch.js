const router = require('express').Router();
const axios = require('axios');

router.route('/').get(async function(req,res){
    const url = 'https://wordsapiv1.p.mashape.com/words?random=true'
    const headers = {
        'content-type':'application/json',
        'x-rapidapi-key': process.env.WORDSAPI_KEY,
        'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
        'accept':'application/json'
    }

    try {
        const response = await axios ({
            method: "GET",
            url: url,
            headers: headers
        })
        console.log('server!~')
        console.log(response.data)
    } catch {
        console.log('e')
    }
})

module.exports = router