import React from 'react'
import axios from 'axios'


class Secondoption extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sWord : ''
        }
    }
    render() {
        if (this.props.SisSynonym === true){
            axios.get('http://localhost:3001/isSynonym', {
                params : {
                    word : this.props.word
                }
            })
            .then((response) => {
                this.setState({sWord : response.data})
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
                this.setState({sWord : response.data})
            })
            .catch((e) => {
                console.error(e)
            })
        }

        return (
            <strong>{this.state.sWord}</strong>
        )
    }
}

export default Secondoption