import React from 'react';
import { Form, Input, Divider, Segment, Grid, Button } from 'semantic-ui-react';
import SegmentMenu from "../components/common/SegmentMenu"
import RegistrationForm from "../modules/RegistrationForm"
import { Link } from 'react-router-dom'

class RegistrationPage extends React.Component{

    render(){
        return <div>
            <SegmentMenu title="Регистрация"/>
            <Segment attached>
                <RegistrationForm />
            </Segment>
            <Button type="submit" color="blue" attached="bottom" >Регистрация</Button>
        </div>
    }
}

export default RegistrationPage;