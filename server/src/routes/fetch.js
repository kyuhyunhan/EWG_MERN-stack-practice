const router = require('express').Router();
const axios = require('axios').default;

router.route('/').get(async function(req,res){
    console.log('just connected to backend')
    const url = 'https://rapidapi.p.rapidapi.com/words/?random=true'
    const headers = {
        'content-type':'application/json',
        'x-rapidapi-key': process.env.WORDSAPI_KEY,
        'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
        'accept':'application/json'
    }

    try {
        const response = await axios.request({
            method: "GET",
            url: url,
            headers: headers
        })
        console.log('server!~')
        console.log(response.data)
    } catch {
        console.log('e')
    }
    // var options = {
    //     method: 'GET',
    //     url: 'https://rapidapi.p.rapidapi.com/words/?random=true',
    //     headers: {
    //         // 'content-type':'application/json',
    //         'x-rapidapi-key': process.env.WORDSAPI_KEY,
    //         'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com'
    //         // 'accept':'application/json'
    //     }
    // }
    // axios.request(options).then(function(response){
    //     console.log(response.data)
    // }).catch (function(error){
    //     console.error(error)
    // })
})

module.exports = router