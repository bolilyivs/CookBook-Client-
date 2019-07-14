import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import RecipeCardHeader from "../components/recipe_cards/RecipeCardHeader"
import RecipeCardBody from "../components/recipe_cards/RecipeCardBody"
import RecipeCardBottom from "../components/recipe_cards/RecipeCardBottom"
import Recipe from "../utils/Recipe"
import { Link } from 'react-router-dom'


class RecipeCard extends React.Component{

    constructor(props){
        super(props);

        let recipe = this.props.recipe || new Recipe()

        this.state = {
            recipeId: recipe.id || "0",
            author: recipe.account.username || "User",
            title: recipe.title || "Title",
            ingredients: recipe.ingredients || [],
            rating: recipe.rating || "0",
            tags: recipe.tags.map(item => item.title) || "0",
        };
    }



    render(){
        return <Grid.Column>
            <RecipeCardHeader 
            author={this.state.author}
            recipeId={this.state.recipeId} />
            <RecipeCardBody 
            title={this.state.title}
            ingredients={this.state.ingredients} 
            tags={this.state.tags}/>
            <RecipeCardBottom 
            recipeId={this.state.recipeId}
            rating={this.state.rating}/>
            <Button 
            attached='bottom'
            as={Link} 
            to={"/recipe/show/"+this.state.recipeId}>
                Читать
            </Button>
        </Grid.Column>
    }
}

export default RecipeCard;