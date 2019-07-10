import React from 'react';
import { Form, Input, Divider, Segment, Header, Button, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

class AccountPanel extends React.Component{
    constructor(props){
        super(props)
    }

    getCreateRecipe(){
        return <Button color="blue"  as={Link} to={"/account/login"} content="Войти" fluid/> 
    }

    getLogin(){
        return <Button color="blue"  as={Link} to={"/recipe/create"} content="Добавить рецепт" fluid/> 
    }

    render(){
        return <Segment className="subSideBar"  inverted>
            {this.getCreateRecipe()}
            {this.getLogin()}
                     
        </Segment>
    }
}

export default AccountPanel;