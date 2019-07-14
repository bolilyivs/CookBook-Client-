import React from 'react';
import {Menu, Dropdown} from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie';

class MainMenu extends React.Component{
    constructor(props){
        super(props);
        
    }

    getAccount(){
        let account = new Cookies().get("account");
        if(!account)
            account = {
            username: "Гость",
        }
        return account
    }

    getMenu(){
        let account = this.getAccount()
        let admin = ""
        let login = (<Dropdown.Item text="Войти" as={Link} to="/account/login"/>);
        if(account.username !== "Гость"){
            login = (<Dropdown.Item text="Выйти" as={Link} to="/account/logout" />);
            if(account.roles)
                admin = account.roles.includes("ROLE_ADMIN") ? "(admin)" : "" ;
        }

       return <Dropdown item icon='user' text={`${account.username} ${admin}`} simple>
        <Dropdown.Menu>
            {login}
        </Dropdown.Menu>
      </Dropdown>
    }

    render(){
        return <Menu attached="bottom" stackable  color="blue"  inverted size="massive" >
                    <Menu.Item content="Обзор рецептов"  as={Link} to="/recipe/find" />
                    <Menu.Item content="Мои рецепты" as={Link} to="/recipe/my"/>
                    <Menu.Item content="Создать рецепт" as={Link} to="/recipe/create"/>
                    <Menu.Menu position="right">
                        {this.getMenu()}
                    </Menu.Menu>
                    
            </Menu>  
    }
}

export default MainMenu;