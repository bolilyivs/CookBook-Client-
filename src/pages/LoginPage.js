import React from 'react';
import { Form, Input, Divider, Segment, Grid, Button } from 'semantic-ui-react';
import SegmentMenu from "../components/common/SegmentMenu"
import LoginForm from "../modules/LoginForm"
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie';

class LoginPage extends React.Component{

    login(account){
        new Cookies().remove("account");
        new Cookies().set("account", account,{path: '/', maxAge: 60 * 60 * 24 * 7});
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