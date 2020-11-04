import React from 'react'
import axios from 'axios'
import Firstoption from './Firstoption';
import Secondoption from './Secondoption';
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
        axios.get('http://localhost:3001/')
            .then((response) => {
                this.setState({ word: response.data })
                var random = Math.random()
                if(random > 0.5){
                    this.setState({FisSynonym: true})
                    this.setState({SisSynonym: false})
                } else {
                    this.setState({FisSynonym: false})
                    this.setState({SisSynonym: true})
                }
                //setState를 3번 호출하다보니까, 하위 Components들도 3번 호출이 되는 것 같음..
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
                    <Button><Firstoption word={this.state.word} isSynonym={this.state.FisSynonym}/></Button>
                    <Button><Secondoption word={this.state.word} isSynonym={this.state.SisSynonym}/></Button>
                </div>
            </div>
        )
    }
}

export default Givenword