import React from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';

class Givenword extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            word: ''
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3001/api/random')
            .then((response) => {
                this.setState({ word: response.data })
            })
            .catch(function(error){
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <h1>{this.state.word}</h1>
                <div>
                    <Button>First Option</Button>
                    <Button>Second Option</Button>
                </div>
            </div>
        )
    }
}

export default Givenword