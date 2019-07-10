import React from 'react';
import { Sidebar, Button, Menu, Icon, Segment } from 'semantic-ui-react';
import FindForm from "./FindForm"
import AccountPanel from "./AccountPanel"

class SideBar extends React.Component{
    constructor(props){
        super(props)

        this.setSize = () => {
            if(this.props.visible)
                return {width: "calc(100% - 350px)"}
            return {width: "100%"}
        }
        
    }

    getPanels(){
      return <React.Fragment>
        <AccountPanel />
        <FindForm />
      </React.Fragment>
    }

    getSideBar() {
        return <Sidebar 
            visible={this.props.visible}
            as={Menu}
            animation='slide along'    
            icon='labeled'
            inverted
            vertical
            width='wide'>
            {this.getPanels()}
        </Sidebar>
    }

    render(){
        return <Sidebar.Pushable as={Segment}>
            {this.getSideBar()}
            <Sidebar.Pusher >
            <Segment basic className="pagebg" style={this.setSize()}>
              {this.props.children}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        
    }
}

export default SideBar;