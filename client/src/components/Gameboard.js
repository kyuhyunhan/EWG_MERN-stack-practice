import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import Givenword from './Givenword';
import Quizwords from './Quizwords'

const jumboStyle = {
    textAlign : 'center'
}

class Gameboard extends React.Component {
    render() {
        return (
            <Jumbotron style={jumboStyle} fluid>
                <h1>Welcome to EWG : finding out synonyms!</h1>
                <Container>
                    <div>
                        <Givenword />
                    </div>
                    <div>
                        <Quizwords />
                    </div>
                </Container>
            </Jumbotron>
        )
    }
}

export default Gameboard