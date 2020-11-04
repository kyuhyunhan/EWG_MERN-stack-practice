import React from 'react'
import axios from 'axios'

class Firstoption extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            fWord : ''
        }
    }
    render() {
        if (this.props.FisSynonym === true){
            axios.get('http://localhost:3001/isSynonym', {
                params : {
                    word : this.props.word
                }
            })
            .then((response) => {
                this.setState({fWord : response.data})
            })
            .catch((e) => {
                console.error(e)
            })
        } else {
            axios.get('http://localhost:3001/isAntonym', {
                params : {
                    word : this.props.word
                }
            })
            .then((response) => {
                this.setState({fWord : response.data})
            })
            .catch((e) => {
                console.error(e)
            })
        }

        return (
            <strong>{this.state.fWord}</strong>
        )
    }
}

export default Firstoption