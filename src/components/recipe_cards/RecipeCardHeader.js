import React from 'react';
import { Menu, Header} from 'semantic-ui-react';
import { Link } from 'react-router-dom'

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
    
    render(){
        return <Menu attached='top' >
            <Menu.Item>
                <Header >{this.state.author}</Header>
            </Menu.Item>
            <Menu.Menu position="right">
                <Menu.Item as={Link} 
                to={"/recipe/"+this.state.recipeId+"/edit"} 
                icon="edit" />
                <Menu.Item as={Link} 
                to={"/recipe/"+this.state.recipeId+"/remove"}  
                icon="trash alternate" />
                <Menu.Item as={Link} 
                to={"/"}  
                icon="close" />
            </Menu.Menu>
        </Menu>
    }
}

export default RecipeCardHeader;