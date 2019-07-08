import React from 'react';
import { Menu, Statistic} from 'semantic-ui-react';

class RecipeCardBottom extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            rating: this.props.rating || "0",
        };
    }
    
    componentWillReceiveProps(nextProps){
        this.setState({
            rating: nextProps.rating || "0",
        });
    }

    render(){
        return <Menu attached >
            <Menu.Item icon="thumbs up" position="left" content = "Понравилось"/>
            <Statistic horizontal size="tiny">
                    <Statistic.Value>{this.state.rating}</Statistic.Value>
                    <Statistic.Label>Рейтинг</Statistic.Label>
            </Statistic>
            <Menu.Item icon="thumbs down" position="right" content = "Не понравилось"/>
        </Menu>
    }
}

export default RecipeCardBottom;