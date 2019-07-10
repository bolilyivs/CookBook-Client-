import React from 'react';
import { Form, Input, List, Segment, Header, Button, Dropdown, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

class IngredientField extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            ingredients: (this.props.values|| [])
        };

        this.createIngredient = this.createIngredient.bind(this);
    }

    componentWillReceiveProps(nextProps){
        this.setState({ingredients: nextProps.values})
    }

    createUI(){
        
        return this.state.ingredients.map((item, index) => this.createIngredient(item, index) );
    }

    changeIngredient(key, value){
        let items = this.state.ingredients;
        items[key] = value;
        this.setState({ingredients: items});

        if(this.props.onChange)
            this.props.onChange(items)
    }

    createIngredient(value, key){
        return <List.Item key={key}>
            <Ingredient 
            title={value.title|| ""}
            amount={value.amount|| ""}
            onChange={this.changeIngredient.bind(this, key)}/>
        </List.Item>  
    }

    addIngredint(){
        let items = this.state.ingredients;
        items.push({title: "",amount: ""});
        this.setState({ingredients: items});
    }

    removeIngredint(){
        let items = this.state.ingredients;
        items.pop();
        this.setState({ingredients: items});
    }



    render(){
        return <List>
            {this.createUI()}
            <Button onClick={this.addIngredint.bind(this)} >Добавить ингредиент</Button>
            <Button onClick={this.removeIngredint.bind(this)} >Удалить последний ингредиент</Button>
        </List>
    }
}

class Ingredient extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            title: this.props.title,
            amount: this.props.amount
        }

        this.changeTitle = this.changeTitle.bind(this)
        this.changeAmount = this.changeAmount.bind(this)
    }

    changeTitle(e){
        this.setState({title: e.target.value})
        if(this.props.onChange)
            this.props.onChange({title: e.target.value, amount: this.state.amount});
    }

    changeAmount(e){
        this.setState({amount: e.target.value})
        if(this.props.onChange)
            this.props.onChange({title: this.state.title, amount: e.target.value});
    }

    render(){
        return <Form.Group>
            
            <Form.Field>
                <Input label="Ингредиент"  type="text" placeholder="Ингредиент" 
                defaultValue={this.props.title || ""} 
                onChange={this.changeTitle}
                /> 
            </Form.Field>
            <Form.Field>
                <Input label="Количество"  type="text" placeholder="Количество" 
                defaultValue={this.props.amount|| ""}
                onChange={this.changeAmount}
                /> 
            </Form.Field>
        </Form.Group>
    }
}

export default IngredientField;