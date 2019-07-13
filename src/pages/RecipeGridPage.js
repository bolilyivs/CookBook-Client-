import React from 'react';
import {Pagination, Grid, Menu, Header, Button, Label, List, Statistic, Segment } from 'semantic-ui-react';
import RecipeCard from "../modules/RecipeCard";
import FindForm from "../modules/FindForm";
import {AppController} from "../utils/AppController";
import Cookies from 'universal-cookie';


class RecipeGridPage extends React.Component{
    constructor(props){
        super(props)
        this.my = this.props.my;
        this.state={
            recipes: [],
            totalPages: 1,
            activePage: 1,
            countRecipes: 10,
            search: {
                title: "",
                username: "",
                tags: [],
                ingredients: [],
            }
        }

        this.getRecipes(this.state.search);
        this.getCount(this.state.search);
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            recipes: [],
            totalPages: 1,
            activePage: 1,
            countRecipes: 10,
            search: {
                title: "",
                username: "",
                tags: [],
                ingredients: [],
            }
        })
        this.my = nextProps.my;

        this.getRecipes(this.state.search);
        this.getCount(this.state.search);
    }

    getCount(search){
        if(this.my){
            new AppController().setSuccessHandler(this.recipeCount.bind(this)).getRecipesCount(search.title, 
                new Cookies().get("account").username, search.tags, search.ingredients);
        }else{
            new AppController().setSuccessHandler(this.recipeCount.bind(this)).getRecipesCount(search.title, 
                search.username, search.tags, search.ingredients);
        }
    }

    getRecipes(search, activePage = 1){
        if(this.my){
            new AppController().setSuccessHandler(this.recipeRecipes.bind(this)).getRecipes(search.title, 
                new Cookies().get("account").username, search.tags, search.ingredients, activePage-1);  
        }else{
            new AppController().setSuccessHandler(this.recipeRecipes.bind(this)).getRecipes(search.title, 
                search.username, search.tags, search.ingredients, activePage-1);  
        } 
    }

    pageChange(e, { activePage }){
        this.setState({ activePage });
        this.getRecipes(this.state.search, activePage);
    }

    filter(search){
        this.setState({search: search});
        this.getRecipes(search);
        this.getCount(search);
    }
    
    

    recipeRecipes(recipes){
        this.setState({recipes: recipes.data});
    }

    recipeCount(count){
        this.setState({totalPages: count.data / this.state.countRecipes})
    }

    getCard(recipe){
        return <RecipeCard key={recipe.id} recipe={recipe}/>
    }

    

    render(){
        return <Grid stackable  centered padded >
            <Grid.Row>
                <Grid.Column width={3}>
                    <FindForm onSubmit={this.filter.bind(this)} />
                </Grid.Column>
                <Grid.Column  width={10}>
                    <Grid  stackable columns={2}>
                        {this.state.recipes.map((recipe) => (this.getCard(recipe)) ) }
                    </Grid>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row >
                    <Pagination activePage={this.state.activePage}  totalPages={this.state.totalPages} onPageChange={this.pageChange.bind(this)}/>
            </Grid.Row>
        </Grid>
    }
}

export default RecipeGridPage;