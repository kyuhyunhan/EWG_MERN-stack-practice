const router = require('express').Router();
const axios = require('axios').default;

router.route('/').get(async function(req,res){
    const url = 'https://rapidapi.p.rapidapi.com/words/?random=true&lettersMin=3&lettersMax=10'
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
        res.send(response.data.word)
        console.log(response.data.word)
    } catch {
        console.log('error!')
    }
})
router.route('/isSynonym').get(async function(req,res) {
    const url = 'https://rapidapi.p.rapidapi.com/words/' + req.params.word + '/synonyms'
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
        res.send(response.data.word)
    } catch {
        console.log('error!')
    }
})
router.route('/isAntonym').get(async function(req,res) {
    const url = 'https://rapidapi.p.rapidapi.com/words/' + req.params.word + '/antonyms'
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
        res.send(response.data.word)
    } catch {
        console.log('error!')
    }
})

module.exports = router
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