import React from 'react';
import { Sidebar, Grid, Menu, Icon, Segment } from 'semantic-ui-react';
import LoginForm from "./LoginForm"
import FindForm from "./FindForm"

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
        <LoginForm />
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