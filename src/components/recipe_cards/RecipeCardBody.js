import React from 'react';
import { List, Grid, Segment, Header, Label, Divider} from 'semantic-ui-react';
import { Link } from 'react-router-dom'

class RecipeCardBody extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: this.props.title || "Title",
            ingredients: this.props.ingredients || [],
            tags: this.props.tags || []
        };
    }

    componentWillReceiveProps(nextProps){

        this.setState({      
            title: nextProps.title || "Title",      
            ingredients: nextProps.ingredients || [],
            tags: nextProps.tags || []
        });
    }

    getTitle(){
        return <Header as='h1'
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

    getTags(){
        return <List divided>
            {this.state.tags.map((item, index) => <Label key={index} as={Link} to={"/recipe/find/" + item}>{item}</Label>)}
        </List>
    }
    
    render(){
        return <React.Fragment>
        <Segment padded attached inverted className="cardbg">
            {this.getTags()}
            {this.getTitle()}
        </ Segment>
        <Segment padded attached >
            <Header content="Ингредиенты"/>
            {this.getIngredients()}
        </ Segment>
        </React.Fragment>
        
    }
}

export default RecipeCardBody;