import React from 'react';
import { Form, Input, Divider, Segment, Header, Button } from 'semantic-ui-react';
import RecipeEditorMenu from "../modules/recipeCreatorComponents/RecipeEditorMenu"
import RecipeEditorForm from "../modules/recipeCreatorComponents/RecipeEditorForm"
import Recipe from "../utils/Recipe"

class RecipeCreatorPage extends React.Component{
    constructor(props){
        super(props);

        if(this.props.match && this.props.match.params.number){
            console.log(this.props.match.params.number)
            this.state = {
                recipe: new Recipe().setLoadedHendle(this.loadRecipeFromServer.bind(this)).recive(this.props.match.params.number),
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
            this.state.recipe.update();
        else
            this.state.recipe.crate();
    }

    render(){
        return <div>
                <RecipeEditorMenu />
            <Segment  attached>
                <RecipeEditorForm onChange={this.changeRecipe.bind(this)} value={this.state.recipe} />
            </Segment>
            <Button size="big" attached='bottom' onClick={this.send.bind(this)} >Отправить</Button>
        </div>
        
        
    }
}

export default RecipeCreatorPage;