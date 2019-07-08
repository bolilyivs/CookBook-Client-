import React from 'react';
import { Form, Input, Divider, Segment, Header, Button } from 'semantic-ui-react';
import RecipeEditorMenu from "../modules/recipeCreatorComponents/RecipeEditorMenu"
import Recipe from "../utils/Recipe"
import RecipeFinder from "../utils/RecipeFinder"

class TestPage extends React.Component{

    handler(res){
        console.log(res.data)
    }

    send(){
        new RecipeFinder().getRecipes(this.handler.bind(this))
    }

    render(){
        return <div>
            <RecipeEditorMenu />
            <Segment attached>
                <Button size="big" attached='bottom' onClick={this.send.bind(this)} >Отправить</Button>
            </Segment>
        </div>
    }
}

export default TestPage;