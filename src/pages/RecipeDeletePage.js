import React from 'react';
import { Form, Input, Divider, Segment, Header, Button } from 'semantic-ui-react';
import RecipeEditorMenu from "../modules/recipeCreatorComponents/RecipeEditorMenu"
import Recipe from "../utils/Recipe"

class RecipeDeletePage extends React.Component{

    send(){
        if(this.props.match && this.props.match.params.number)
            new Recipe().delete(this.props.match.params.number);
    }

    render(){
        return <div>
            <RecipeEditorMenu />
            <Segment attached>
                <Button size="big" attached='bottom' onClick={this.send.bind(this)} >Удалить</Button>
            </Segment>
        </div>
    }
}

export default RecipeDeletePage;