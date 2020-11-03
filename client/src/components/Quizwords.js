import React from 'react';
import Firstoption from './Firstoption';
import Secondoption from './Secondoption';
import Button from 'react-bootstrap/Button';

//Quizwords Component에서 axios를 통해 

class Quizwords extends React.Component {

    render() {
        return (
            <div>
                <Button><Firstoption/></Button>
                <Button><Secondoption/></Button>
            </div>
        )
    }
}

export default Quizwords