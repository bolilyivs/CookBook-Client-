import React from 'react';
import {Segment, Grid, Menu, Header, Button, Label, List, Statistic } from 'semantic-ui-react';
import RecipeCard from "../modules/RecipeCard";
import {AppController} from "../utils/AppController";


class RecipeGridPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            recipes: []
        }
        this.getRecipes();
    }

    getRecipes(){
        new AppController().setSuccessHandler(this.recipeRecipes.bind(this)).getRecipes();
    }

    recipeRecipes(recipes){
        console.log(recipes.data)
        this.setState({recipes: recipes.data});
    }

    getCard(recipe){
        return <RecipeCard recipe={recipe}/>
    }
    render(){
        return <Grid  stackable columns={2}>
            {this.state.recipes.map((recipes) =>(this.getCard(recipes)))} 
            </Grid>

        
        
    }
}

export default RecipeGridPage;