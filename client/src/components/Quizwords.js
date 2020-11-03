import React from 'react';
import Synonym from './Synonym';
import Notsynonym from './Notsynonym';
import Button from 'react-bootstrap/Button';

class Quizwords extends React.Component {

    render() {
        return (
            <div>
                <h1>Quizwords</h1>
                <Button><Synonym/></Button>
                <Button><Notsynonym/></Button>
            </div>
        )
    }
}

export default Quizwords