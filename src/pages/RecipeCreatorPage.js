import React from 'react';
import { Form, Input, Divider, Segment, Header, Button } from 'semantic-ui-react';
import SegmentMenu from "../components/common/SegmentMenu"
import RecipeEditorForm from "../components/recipe_edit/RecipeEditorForm"
import Recipe from "../utils/Recipe"
import {AppController} from "../utils/AppController";

class RecipeCreatorPage extends React.Component{
    constructor(props){
        super(props);
        if(this.props.number){
            console.log(this.props.number)
            new AppController().setSuccessHandler(this.loadRecipeFromServer.bind(this)).getRecipe(this.props.number);
            this.state = {
                recipe: new Recipe(),
                update: true
            }
        }else{
            this.state = {
                recipe: new Recipe()
            }
        }

        
    }

    loadRecipeFromServer(recipe){
        this.setState({recipe: recipe})
    }

    changeRecipe(value){
        this.setState({recipe: value})
    }

    send(){
        if(this.state.update)
            new AppController().updateRecipe(this.state.recipe);
        else
        new AppController().createRecipe(this.state.recipe);
    }

    render(){
        return <div>
                <SegmentMenu title="Добавление рецепта" />
            <Segment  attached>
                <RecipeEditorForm onChange={this.changeRecipe.bind(this)} value={this.state.recipe} />
            </Segment>
            <Button size="big" attached='bottom' onClick={this.send.bind(this)} >Отправить</Button>
        </div>
    }
}

export default RecipeCreatorPage;