import React from 'react';
import { Grid, Container, Segment } from 'semantic-ui-react';
import RecipeCardHeader from "../components/recipe_cards/RecipeCardHeader"
import RecipeCardBody from "../components/recipe_cards/RecipeCardBody"
import RecipeCardBottom from "../components/recipe_cards/RecipeCardBottom"
import Recipe from "../utils/Recipe"
import { Link } from 'react-router-dom'


class RecipeArticle extends React.Component{

    constructor(props){
        super(props);

        let recipe = this.props.recipe || new Recipe()

        this.state = {
            recipeId: recipe.id || "Title",
            author: recipe.author || "User",
            title: recipe.title || "Title",
            description: recipe.description || "Description",
            ingredients: recipe.ingredients || [],
            rating: recipe.rating || "0",
        };
    }

    componentWillReceiveProps(nextProps){
        let recipe = nextProps.recipe || new Recipe();
        this.setState({
            recipeId: recipe.id || "Title",
            author: recipe.author || "",
            title: recipe.title || "Title",
            description: recipe.description || "Description",
            ingredients: recipe.ingredients || [],
            rating: recipe.rating || "0",
        });
    }

    getDescription() {
        return {__html: this.state.description};
    }


    render(){
        return <Grid.Column>
            <RecipeCardHeader 
            author={this.state.author}
            recipeId={this.state.recipeId} />
            <RecipeCardBody 
            title={this.state.title}
            ingredients={this.state.ingredients} />
            <RecipeCardBottom 
            rating={this.state.rating}/>
            <Segment attached="bottom">
                <Container text>
                    <div dangerouslySetInnerHTML={this.getDescription()} />
                </Container>
            </Segment>  
        </Grid.Column>
    }
}

export default RecipeArticle;