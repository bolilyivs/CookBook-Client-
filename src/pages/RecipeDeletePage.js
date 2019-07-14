import React from 'react';
import {Segment,  Button } from 'semantic-ui-react';
import SegmentMenu from "../components/common/SegmentMenu"
import {AppController} from "../utils/AppController";

class RecipeDeletePage extends React.Component{

    send(){
        new AppController().setSuccessHandler(this.success.bind()).deleteRecipe(this.props.number);
    }

    render(){
        return <div>
            <SegmentMenu />
            <Segment attached>
                <Button size="big" attached='bottom' onClick={this.send.bind(this)} >Удалить</Button>
            </Segment>
        </div>
    }

    success(){
        new AppController().go("/success");
    }
}

export default RecipeDeletePage;