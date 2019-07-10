import React from 'react';
import { Form, Input, Divider, Segment, Header, Button } from 'semantic-ui-react';
import SegmentMenu from "../components/common/SegmentMenu"
import Recipe from "../utils/Recipe"
import {AppController} from "../utils/AppController";

class RecipeDeletePage extends React.Component{

    send(){
        new AppController().deleteRecipe(this.props.number);
    }

    render(){
        return <div>
            <SegmentMenu />
            <Segment attached>
                <Button size="big" attached='bottom' onClick={this.send.bind(this)} >Удалить</Button>
            </Segment>
        </div>
    }
}

export default RecipeDeletePage;