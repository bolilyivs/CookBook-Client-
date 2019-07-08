import React from 'react';
import {Segment, Grid, Menu, Header, Button, Label, List, Statistic } from 'semantic-ui-react';
import RecipeArticle from "../modules/RecipeArticle";
import RecipeFinder from "../utils/RecipeFinder";
import Recipe from "../utils/Recipe"

class RecipePage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            recipe: new Recipe().setLoadedHendle(this.recipeRecipe.bind(this)).recive(this.props.match.params.number)
        }
    }

    recipeRecipe(recipe){
        console.log(recipe);
        this.setState({recipes: recipe});
    }

    render(){
        return <div>
            <RecipeArticle recipe={this.state.recipe}/>
            </div>

        
        
    }
}

export default RecipePage;