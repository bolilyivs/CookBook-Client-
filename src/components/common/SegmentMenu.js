import React from 'react';
import { Menu, Header} from 'semantic-ui-react';
import { Link } from 'react-router-dom'

class SegmentMenu extends React.Component{
    render(){
        return <Menu attached="top">
            <Menu.Item>
                <Header >{this.props.title || ""}</Header>
            </Menu.Item>
            <Menu.Item position="right" icon="remove" as={Link} to="/recipe/" />
        </Menu>
    }
}

export default SegmentMenu;