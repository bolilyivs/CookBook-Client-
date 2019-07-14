import React from 'react';
import { Segment,Button } from 'semantic-ui-react';
import SegmentMenu from "../components/common/SegmentMenu"
import RecipeEditorForm from "../components/recipe_edit/RecipeEditorForm"
import Recipe from "../utils/Recipe"
import {AppController} from "../utils/AppController";

class RecipeCreatorPage extends React.Component{
    constructor(props){
        super(props);
        if(this.props.number){
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
        new AppController().setSuccessHandler(this.getTagOptions.bind(this)).getTags();
    }

    getTagOptions(options){
        this.setState({tagOptions: options.data.map( val => val.name)});
    }

    loadRecipeFromServer(recipe){
        this.setState({recipe: recipe})
    }

    changeRecipe(value){
        this.setState({recipe: value})
    }

    send(){
        if(this.state.update)
            new AppController().setSuccessHandler(this.success.bind()).updateRecipe(this.state.recipe);
        else
        new AppController().setSuccessHandler(this.success.bind()).createRecipe(this.state.recipe);
    }

    success(){
        new AppController().go("/success");
    }

    render(){
        return <div>
                <SegmentMenu title="Добавление рецепта" />
            <Segment  attached>
                <RecipeEditorForm onChange={this.changeRecipe.bind(this)} tags={this.state.tagOptions} value={this.state.recipe} />
            </Segment>
            <Button size="big" attached='bottom' onClick={this.send.bind(this)} 
            disabled={!this.state.recipe.title || !this.state.recipe.description }
            >Отправить</Button>
        </div>
    }
}

export default RecipeCreatorPage;