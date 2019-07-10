import React from 'react';
import { Menu, Statistic} from 'semantic-ui-react';
import Recipe from "../../utils/Recipe";
import {AppController} from "../../utils/AppController";

class RecipeCardBottom extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            rating: this.props.rating || "0",
            recipeId: this.props.recipeId || ""
        };
    }
    
    componentWillReceiveProps(nextProps){
        this.setState({
            rating: nextProps.rating || "0",
            recipeId: nextProps.recipeId || "0"
        });
    }

    ratingPlus(){
        new AppController().setSuccessHandler(this.update.bind(this)).ratingPlusRecipe(this.state.recipeId);
    }

    ratingMinus(){
        new AppController().setSuccessHandler(this.update.bind(this)).ratingMinusRecipe(this.state.recipeId);
    }

    update(res){
        console.log("test", res)
        this.setState({
            rating: res.rating || "0",
        });
    }   

    render(){
        return <Menu attached >
            <Menu.Item icon="thumbs up" position="left" content = "Понравилось" onClick={this.ratingPlus.bind(this)}/>
            <Statistic horizontal size="tiny">
                    <Statistic.Value>{this.state.rating}</Statistic.Value>
                    <Statistic.Label>Рейтинг</Statistic.Label>
            </Statistic>
            <Menu.Item icon="thumbs down" position="right" content = "Не понравилось" onClick={this.ratingMinus.bind(this)}/>
        </Menu>
    }
}

export default RecipeCardBottom;