import React from 'react';
import { Menu, Header} from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie';

class RecipeCardHeader extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            author: this.props.author || "User",
            recipeId: this.props.recipeId || "",
            recipeHide: this.props.recipeHide || false,
        };
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            recipeId: nextProps.recipeId || "Title",
            author: nextProps.author || "User",
            recipeHide: nextProps.recipeHide || false,
        });
    }

    getHide(){
        let account = new Cookies().get("account");
        if(account.roles && account.roles.includes("ROLE_ADMIN")){
            return  <Menu.Item as={Link} 
                to={"/recipe/hide/"+this.state.recipeId}  
                icon={this.state.recipeHide ? "eye " : "eye slash"} />
        }
        return ""
    }

    getEditButton(){
        let account = new Cookies().get("account");
        if(!account.roles)
        account.roles = []
        if(this.state.author === account.username || account.roles.includes("ROLE_ADMIN")){
            return <React.Fragment>
                <Menu.Item as={Link} 
                to={"/recipe/edit/"+this.state.recipeId} 
                icon="edit" />
                <Menu.Item as={Link} 
                to={"/recipe/remove/"+this.state.recipeId}  
                icon="trash alternate" />
                {this.getHide()}
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
                {(this.props.article)? <Menu.Item as={Link} to={"/recipe/find"}  icon="close" /> : ""}
            </Menu.Menu>
        </Menu>
    }
}

export default RecipeCardHeader;