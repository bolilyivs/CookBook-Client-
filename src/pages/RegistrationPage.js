import React from 'react';
import { Form, Input, Divider, Segment, Grid, Button } from 'semantic-ui-react';
import SegmentMenu from "../components/common/SegmentMenu"
import RegistrationForm from "../modules/RegistrationForm"
import { Link } from 'react-router-dom'
import {AppController} from "../utils/AppController";

class RegistrationPage extends React.Component{

    registration(data){
        delete data.password2;
        console.log(data)
        new AppController().setSuccessHandler(this.ok.bind(this)).registration(data);
        
    }

    ok(){
        var timerId = setTimeout(()=> document.location.href = "/", 500);
    }

    render(){
        return <div>
            <SegmentMenu title="Регистрация"/>
            <RegistrationForm onSubmit={this.registration.bind(this)}/>
            
        </div>
    }
}

export default RegistrationPage;