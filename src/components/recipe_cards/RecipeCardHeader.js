import React from 'react';
import { Menu, Header} from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie';


class RecipeCardHeader extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            author: this.props.author || "User",
            recipeId: this.props.recipeId || ""
        };
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            recipeId: nextProps.recipeId || "Title",
            author: nextProps.author || "User",
        });
    }

    getEditButton(){
        let account = new Cookies().get("account");
        if(!account.roles)
        account.roles = []
        if(this.state.author === account.username || account.roles.includes("ROLE_ADMIN")){
            return <React.Fragment>
                <Menu.Item as={Link} 
                to={"/recipe/"+this.state.recipeId+"/edit"} 
                icon="edit" />
                <Menu.Item as={Link} 
                to={"/recipe/"+this.state.recipeId+"/remove"}  
                icon="trash alternate" />
            </React.Fragment>
        }
    }
    
    render(){



        return <Menu attached='top' >
            <Menu.Item>
                <Header >{this.state.author}</Header>
            </Menu.Item>
            <Menu.Menu position="right">
                {this.getEditButton()}
                <Menu.Item as={Link} 
                to={"/recipe/"}  
                icon="close" />
            </Menu.Menu>
        </Menu>
    }
}

export default RecipeCardHeader;