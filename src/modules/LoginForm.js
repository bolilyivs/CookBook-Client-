import React from 'react';
import { Form, Input, Divider, Segment, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

class LoginForm extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return <Segment className="subSideBar" >
            <Form >     
                <Header size='large' color="grey">Аккаунт</Header>               
                <Form.Field >
                    <Input label={{icon: "user"}}  type="text" placeholder="Username"  />               
                </Form.Field>
                <Form.Field>
                    <Input label={{icon: "key"}}  type="password" placeholder="Password"  />               
                </Form.Field> 
                <Divider inverted />
                <Button.Group widths='2'>
                    <Button type="submit" >Войти</Button>
                    <Button type="submit">Регистрация</Button>
                </Button.Group> 
            </Form> 
            <Button color="blue"
            attached='bottom'
            as={Link} 
            to={"/recipe/create"}>
                Создать
            </Button>                
        </Segment>
    }
}

export default LoginForm;