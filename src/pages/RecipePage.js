import React from 'react';
import RecipeArticle from "../modules/RecipeArticle";
import Recipe from "../utils/Recipe"
import {AppController} from "../utils/AppController";

class RecipePage extends React.Component{
    constructor(props){
        super(props)
        new AppController().setSuccessHandler(this.recipeRecipe.bind(this)).getRecipe(this.props.number);
        this.state={
            recipe: new Recipe()
        }
    }

    recipeRecipe(recipe){
        this.setState({recipe: recipe});
    }

    render(){
        return <div>
            <RecipeArticle recipe={this.state.recipe}/>
            </div>  
    }
}

export default RecipePage;