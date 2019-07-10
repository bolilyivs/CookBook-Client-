import React from 'react';
import { Form, Input, Divider, Segment, Header, Button } from 'semantic-ui-react';


class RegistrationForm extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return <Form >              
                <Form.Field >
                    <Input label={{icon: "user", content: "Догин"}}  type="text" placeholder="Логин"  />               
                </Form.Field>
                <Form.Field>
                    <Input label={{icon: "key", content: "Пароль"}}  type="password" placeholder="Пароль"  />               
                </Form.Field>
                <Form.Field>
                    <Input label={{icon: "key", content: "Повторите пароль"}}  type="password" placeholder="Повторите пароль"  />               
                </Form.Field> 
                <Form.Field>
                    <Input label={{icon: "mail", content: "Email"}}  type="password" placeholder="Email"  />               
                </Form.Field> 
                <Divider inverted />
            </Form> 
    }
}

export default RegistrationForm;