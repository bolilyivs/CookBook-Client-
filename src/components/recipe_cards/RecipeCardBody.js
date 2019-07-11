import React from 'react';
import { List, Grid, Segment, Header} from 'semantic-ui-react';


class RecipeCardBody extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: this.props.title || "Title",
            ingredients: this.props.ingredients || []
        };
    }

    componentWillReceiveProps(nextProps){

        console.log("test", nextProps)
        this.setState({      
            title: nextProps.title || "Title",      
            ingredients: nextProps.ingredients || [],
        });
    }

    getTitle(){
        return <Header as='h2'
             icon="food" 
             content={this.state.title} /> 
    }

    getIngredientItem(item, index){

        return <List.Item key={index}>
            <Grid columns={2} relaxed='very' >
                <Grid.Column textAlign='left'>
                    {item.title}
                </Grid.Column>
                <Grid.Column textAlign='right'>
                    {item.amount}
                </Grid.Column>       
            </Grid>
        </List.Item>
    }

    getIngredients(){
        return <List divided>
            {this.state.ingredients.map(this.getIngredientItem)}
        </List>

    }
    
    render(){
        return <Segment padded attached>
        <Grid columns={2} relaxed='very' >
            <Grid.Column verticalAlign='middle'>
                {this.getTitle()}
            </Grid.Column>
            <Grid.Column verticalAlign='middle'>
                {this.getIngredients()}
            </Grid.Column>        
        </Grid>
    </Segment>
    }
}

export default RecipeCardBody;