import React from 'react';
import { Menu, Statistic} from 'semantic-ui-react';
import Recipe from "../../utils/Recipe";

class RecipeCardBottom extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            rating: this.props.rating || "0",
            recipeId: this.props.recipeId || ""
        };
    }
    
    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        this.setState({
            rating: nextProps.rating || "0",
            recipeId: nextProps.recipeId || "0"
        });
    }

    ratingPlus(){
        console.log(this.state.recipeId)
        new Recipe().setLoadedHendle(this.update.bind(this)).ratingPlus(this.state.recipeId);
    }

    ratingMinus(){
        new Recipe().setLoadedHendle(this.update.bind(this)).ratingMinus(this.state.recipeId);
    }

    update(res){
        console.log(res)
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