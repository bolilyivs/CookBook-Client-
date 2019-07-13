import React from 'react';
import { Form, Input, Divider, Segment, Header, Button } from 'semantic-ui-react';
import SegmentMenu from "../components/common/SegmentMenu"
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom'

class LogoutPage extends React.Component{
    constructor(props){
        super(props)
        new Cookies().remove("account");
        var timerId = setTimeout(()=> document.location.href = "/", 500);
    }

    handler(res){
        console.log(res.data)
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