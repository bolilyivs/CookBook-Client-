import React from 'react';
import { Segment} from 'semantic-ui-react';
import SegmentMenu from "../components/common/SegmentMenu"
import Cookies from 'universal-cookie';
import AppController from "../utils/AppController"

class LogoutPage extends React.Component{
    constructor(props){
        super(props)
        new Cookies().remove("account");
        new AppController().go("/");
        
    }

    render(){
        return <div>
            <SegmentMenu />
            <Segment attached>
                "Вы вышли"
            </Segment>
        </div>
    }
}

export default LogoutPage;