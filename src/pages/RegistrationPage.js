import React from 'react';
import SegmentMenu from "../components/common/SegmentMenu"
import RegistrationForm from "../modules/RegistrationForm"
import {AppController} from "../utils/AppController";

class RegistrationPage extends React.Component{

    registration(data){
        delete data.password2;
        new AppController().setSuccessHandler(this.ok.bind(this)).registration(data);
        
    }

    ok(){
        new AppController().go("/account/login");
    }

    render(){
        return <div>
            <SegmentMenu title="Регистрация"/>
            <RegistrationForm onSubmit={this.registration.bind(this)}/>
            
        </div>
    }
}

export default RegistrationPage;