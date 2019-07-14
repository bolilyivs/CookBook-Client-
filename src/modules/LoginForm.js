import React from 'react';
import { Form, Input, Divider, Button } from 'semantic-ui-react';


class LoginForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            username: "",
            password: ""
        }
    }

    changeUsername(e){
        this.setState({username: e.target.value});
    }

    changePassword(e){
        this.setState({password: e.target.value});
    }

    render(){
        return <Form >              
                <Form.Field >
                    <Input label={{icon: "user"}}  type="text" placeholder="Username" onChange={this.changeUsername.bind(this)} />               
                </Form.Field>
                <Form.Field>
                    <Input label={{icon: "key"}}  type="password" placeholder="Password"  onChange={this.changePassword.bind(this)}/>               
                </Form.Field> 
                <Divider inverted />
                <Button type="submit" color="blue" onClick={e => this.props.onLogin(this.state)} >Войти</Button>
            </Form> 
    }
}

export default LoginForm;