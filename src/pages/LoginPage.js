import React from 'react';
import { Form, Input, Divider, Segment, Grid, Button } from 'semantic-ui-react';
import SegmentMenu from "../components/common/SegmentMenu"
import LoginForm from "../modules/LoginForm"
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie';
import {AppController} from "../utils/AppController";

class LoginPage extends React.Component{

    login(account){
        new Cookies().remove("account");
        new Cookies().set("account", account,{path: '/', maxAge: 60 * 60 * 24 * 7});
        new AppController().setSuccessHandler(this.loggedIn.bind(this)).login();
    }

    loggedIn(account){
        if(account.data){
            let data = account.data
            data.password = new Cookies().get("account").password;
            new Cookies().set("account", data,{path: '/', maxAge: 60 * 60 * 24 * 7});
            document.location.href = "/";
        }
        
    }

    render(){
        return <div>
            <SegmentMenu title="Авторизация"/>
            <Segment attached>
                <Segment placeholder>
                    <Grid columns={2}  stackable>
                        <Grid.Column>
                            <LoginForm onLogin={this.login.bind(this)} />
                        </Grid.Column>
                        <Grid.Column verticalAlign='middle'>
                            <Button  icon='signup' size='big' content="Регистрация"   as={Link} to={"/account/registration"} />
                        </Grid.Column>
                    </Grid>
                    <Divider vertical>Или</Divider>
                </Segment>
            </Segment>
        </div>
    }
}

export default LoginPage;