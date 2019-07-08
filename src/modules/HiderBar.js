import React from 'react';
import {Menu, Icon, Button, Header, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

class HiderBar extends React.Component{
    constructor(props){
        super(props);
        this.showMenu = e => { this.props.onShowMenu(e.target.value)};
    }

    render(){
        return <Segment className="headerbg">
            <Menu stackable className="headerPanelbg">
                <Menu.Menu >
                    <Menu.Item icon='bars' onClick={this.showMenu}>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
            <Header  as='h1' icon textAlign='center'>
                <Icon name='food' circular />
                <Header.Content>CookBook</Header.Content>
            </Header>
            
    </Segment>
        
    }
}

export default HiderBar;