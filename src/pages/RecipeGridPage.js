import React from 'react';
import {Pagination, Grid, Menu, Header, Button, Label, List, Statistic } from 'semantic-ui-react';
import RecipeCard from "../modules/RecipeCard";
import {AppController} from "../utils/AppController";


class RecipeGridPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            recipes: [],
        }
        this.search = {
            username: "",
            tags: [],
            ingredients: [],
            title: "",
        }

        this.find();
        this.getRecipes();
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.search) {
            let search = nextProps.search.split("&");
            search = {
                title: search[0],
                username: search[1],
                tags: search[2] !== "" ? search[2].split(";") : [],
                ingredients: search[3] !== "" ?  search[3].split(";") : [],
                
            };
            this.search = search;
            this.getRecipes();
        }
    }

    find(){
        if (this.props.search) {
            let search = this.props.search.split("&");
            search = {
                title: search[0],
                username: search[1],
                tags: search[2] !== "" ? search[2].split(";") : [],
                ingredients: search[3] !== "" ?  search[3].split(";") : [],
                
            };
            this.search = search;
            this.getRecipes();
        }
    }

    getCount(){
        new AppController().setSuccessHandler(this.recipeRecipes.bind(this)).getRecipes(this.search.title, 
            this.search.username, this.search.tags, this.search.ingredients);
    }

    getRecipes(){
        new AppController().setSuccessHandler(this.recipeRecipes.bind(this)).getRecipes(this.search.title, 
            this.search.username, this.search.tags, this.search.ingredients);
    }

    recipeRecipes(recipes){
        this.setState({recipes: recipes.data});
    }

    getCard(recipe){
        return <RecipeCard key={recipe.id} recipe={recipe}/>
    }
    render(){
        return <div>
            <Grid  stackable columns={2}>
            {this.state.recipes.map((recipe) => (this.getCard(recipe)) ) }
            </Grid>
           
            </div>
    }
}

export default RecipeGridPage;