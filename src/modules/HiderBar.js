import React from 'react';
import {Menu, Icon, Button, Header, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

class HiderBar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <Segment attached className="headerbg">
            <Header  as='h1' icon textAlign='center'>
                <Icon name='food' circular />
                <Header.Content>CookBook</Header.Content>
            </Header>
        </Segment>
    }
}

export default HiderBar;