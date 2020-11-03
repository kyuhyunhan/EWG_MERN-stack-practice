import React from 'react'
import axios from 'axios'

class Givenword extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            word : 'testWord'
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3001/')
            .then(function(response){
                console.log('client success!')
                console.log(response.data)
            })
            .catch(function(error){
                console.log(error)
            })
    }

    render() {
        return (
            <h1>{this.state.word}</h1>
        )
    }
}

export default Givenword