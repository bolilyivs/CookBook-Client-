import React from 'react';
import { Menu, Header} from 'semantic-ui-react';
import { Link } from 'react-router-dom'

class RecipeEditorMenu extends React.Component{
    render(){
        return <Menu attached="top">
            <Menu.Item>
                <Header >Добавление рецепта</Header>
            </Menu.Item>
            <Menu.Item position="right" icon="remove" as={Link} to="/" />
        </Menu>
    }
}

export default RecipeEditorMenu;