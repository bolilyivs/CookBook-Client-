import React from 'react';
import { Form, Input, Divider, Segment, Header, Button } from 'semantic-ui-react';
import Rest from "../utils/Rest"
import RecipeFinder from "../utils/RecipeFinder"
import SegmentMenu from "../components/common/SegmentMenu"

class TestPage extends React.Component{

    handler(res){
        console.log(res.data)
    }

    send(){
        Rest.get("http://localhost:8080/api/recipe", (res) => (console.log(res)));
    }

    render(){
        return <div>
            <Segment attached>
                <SegmentMenu />
                <Button size="big" attached='bottom' onClick={this.send.bind(this)} >Отправить</Button>
            </Segment>
        </div>
    }
}

export default TestPage;