import React from 'react';
import { Form, Input, Divider, Segment, Button } from 'semantic-ui-react';


class RegistrationForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
            password2: "",
            email: "",
        }
    }

    usernameChange(e){
        this.setState({username: e.target.value});
    }

    passwordChange(e){
        this.setState({password: e.target.value});
    }

    password2Change(e){
        this.setState({password2: e.target.value});
    }

    emailChange(e){
        this.setState({email: e.target.value});
    }

    submit(){
        if(this.state.password !== this.state.password2){
            return
        }

        this.props.onSubmit(this.state)
    }

    render(){
        return <React.Fragment >
            <Segment attached>
                <Form >              
                    <Form.Field >
                        <Input label={{icon: "user", content: "Логин"}}  type="text" placeholder="Логин" onChange={this.usernameChange.bind(this)} />               
                    </Form.Field>
                    <Form.Field>
                        <Input label={{icon: "key", content: "Пароль"}}  type="password" placeholder="Пароль"  onChange={this.passwordChange.bind(this)}/>               
                    </Form.Field>
                    <Form.Field>
                        <Input label={{icon: "key", content: "Повторите пароль"}}  type="password" placeholder="Повторите пароль"  onChange={this.password2Change.bind(this)}/>               
                    </Form.Field> 
                    <Form.Field>
                        <Input label={{icon: "mail", content: "Email"}}  type="password" placeholder="Email"  onChange={this.emailChange.bind(this)}/>               
                    </Form.Field> 
                    <Divider inverted />
                </Form> 
            </Segment>
            <Button type="submit" color="blue" attached="bottom" onClick={this.submit.bind(this)}
            disabled={ !this.state.password || !this.state.password2 || !this.state.username || !this.state.email}
            >Регистрация</Button>
        </React.Fragment>
    }
}

export default RegistrationForm;