import React from 'react';
import {Segment,  Button } from 'semantic-ui-react';
import SegmentMenu from "../components/common/SegmentMenu"
import {AppController} from "../utils/AppController";

class RecipeHidePage extends React.Component{

    send(){
        new AppController().setSuccessHandler(this.success.bind()).recipeHide(this.props.number);
    }

    render(){
        return <div>
            <SegmentMenu />
            <Segment attached>
                <p>Скрыть рецепт?</p>
                <Button size="big" attached='bottom' onClick={this.send.bind(this)} >Скрыть</Button>
            </Segment>
        </div>
    }

    success(){
        new AppController().go("/success");
    }
}

export default RecipeHidePage;