import React from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';

class Givenword extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            word: '',
            FisSynonym: false,
            SisSynonym: false
            
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3001/api/random')
            .then((response) => {
                this.setState({ word: response.data })
                // var random = Math.random()
                // if(random > 0.5){
                //     this.setState({FisSynonym: true})
                //     this.setState({SisSynonym: false})
                // } else {
                //     this.setState({FisSynonym: false})
                //     this.setState({SisSynonym: true})
                // }
                console.log(this.state.word + '/ ' + this.state.FisSynonym + ', ' + this.state.SisSynonym)
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