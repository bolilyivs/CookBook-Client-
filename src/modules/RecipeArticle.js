import React from 'react';
import { Grid, Container, Segment } from 'semantic-ui-react';
import RecipeCardHeader from "../components/recipe_cards/RecipeCardHeader"
import RecipeCardBody from "../components/recipe_cards/RecipeCardBody"
import RecipeCardBottom from "../components/recipe_cards/RecipeCardBottom"
import Recipe from "../utils/Recipe"


class RecipeArticle extends React.Component{

    constructor(props){
        super(props);

        let recipe = this.props.recipe || new Recipe()

        this.state = {
            recipeId: recipe.id || "Title",
            author: recipe.account || "User",
            title: recipe.title || "Title",
            description: recipe.description || "Description",
            ingredients: recipe.ingredients || [],
            rating: recipe.rating || "0",
            tags: recipe.tags || [],
        };
    }

    componentWillReceiveProps(nextProps){
        let recipe = nextProps.recipe || new Recipe();
        this.setState({
            recipeId: recipe.id || "0",
            author: recipe.account || "",
            title: recipe.title || "Title",
            description: recipe.description || "Description",
            ingredients: recipe.ingredients || [],
            rating: recipe.rating || "0",
            tags: recipe.tags || [],
        });
    }

    getDescription() {
        return {__html: this.state.description};
    }


    render(){
        return <Grid centered columns="2">
            <Grid.Column>
                <RecipeCardHeader 
                author={this.state.author}
                recipeId={this.state.recipeId} article />
                
                <RecipeCardBody 
                title={this.state.title}
                ingredients={this.state.ingredients} 
                tags={this.state.tags}
                />
                <RecipeCardBottom 
                recipeId={this.state.recipeId}
                rating={this.state.rating}/>
                <Segment attached="bottom">
                    <Container >
                        <div dangerouslySetInnerHTML={this.getDescription()} />
                    </Container>
                </Segment> 
            </Grid.Column> 
        </Grid>
    }
}

export default RecipeArticle;