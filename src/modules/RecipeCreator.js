import React from 'react';
import { Form, Input, List, Segment, Header, Button, Dropdown, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class RecipeCreator extends React.Component{
    constructor(props){
        super(props);
        this.units = ["шт", "кг", "гр"].map((u, index) => ({ key: index, text: u, value: u}));   
        console.log(this.match)
        
        if(this.props.recipe)
            this.startInit()
        else
            this.state = {
                title: "",
                description: "",
                ingredients: [],
                ingredientsAmount: [],
                tags: "",
                tagsBase: this.getTagListFromServer(),
                ingredientsList: []
            };
    }

    startInit(){

        this.state = {
            id: this.props.recipe.id,
            title: this.props.recipe.title,
            description: this.props.recipe.description,
            ingredients: ["1","2"],
            ingredientsAmount: this.props.recipe.ingredientsAmount.map(item => item),
            tags: this.props.recipe.tags,
            tagsBase: this.getTagListFromServer().concat(this.props.recipe.tags.map( (item, index) => ({key: index, text: item, value: item}) )),
            ingredientsList: []
        };
        this.props.recipe.ingredients.map(ing => (this.addIngredient()))
        

        console.log(this.state)
    }


    render(){
        return <React.Fragment>
            {this.getMenu()}
            <Segment attached>
                {this.getForm()}
            </Segment>
            <Button size="big" attached='bottom' onClick={this.confirm.bind(this)}>Отправить</Button>
        </React.Fragment>
    }

    ////////////////////////////////////////////////////////////////////////////
    // Events
    //////////////////////////////////////////////////////////////////////////

    getTagListFromServer(){
        return [
            {key: 0, text: "tag1", value: "tag1" },
            {key: 1, text: "tag2", value: "tag2" },
            {key: 2, text: "tag3", value: "tag3" },
            {key: 3, text: "tag4", value: "tag4" },
        ]
    }

    addIngredient(){
        let ingredients = this.state.ingredientsList;
        ingredients.push(this.getIngredient(ingredients.length));
        this.setState({ingredientsList : ingredients})
        
        let ingrs = this.state.ingredients;
        ingrs.push("");
        this.setState({ingredients: ingrs});

        ingrs = this.state.ingredientsAmount;
        ingrs.push("");
        this.setState({ingredientsAmount: ingrs});
    }

    popIngredient(){
        let ingredients = this.state.ingredientsList;
        
        if(ingredients.length <= 1)
            return;

        ingredients.pop();
        this.setState({ingredientsList : ingredients})

        let ingrs = this.state.ingredients;
        ingrs.pop();
        this.setState({ingredients: ingrs});

        ingrs = this.state.ingredientsAmount;
        ingrs.pop();
        this.setState({ingredientsAmount: ingrs});
    }

    changeIngredientsAmount(id, event){
        let ingrs = this.state.ingredientsAmount;
        ingrs[id] = event.target.value;
        this.setState({ingredientsAmount: ingrs});
    }

    changeIngredients(id, event){
        let ingrs = this.state.ingredients;
        ingrs[id] = event.target.value;
        this.setState({ingredients: ingrs});
    }

    changeTitle(event){
        this.setState({title: event.target.value});
    }

    changeTags(event, value){
        this.setState({tags: value.value});
    }

    addTagsBase(event, value){
        let _tagsBase = this.state.tagsBase;
        _tagsBase.push({key: _tagsBase.length, text: value.value, value: value.value})
        this.setState({tagsBase: _tagsBase});
        console.log(this.state.tagsBase)
    }

    changeDescription(event, editor ){
        this.setState({description: editor.getData()});
    }

    confirm(){
        console.log(this.state);
    }


    ////////////////////////////////////////////////////////////////////////////////////////
    // Ract Blocks
    /////////////////////////////////////////////////////////////////////////////////////////
    getForm(){
        return <Form widths='equal'>
            <Form.Field>
                <Input label="Заголовок" value={this.state.title}  type="text" placeholder="Заголовок" onChange={this.changeTitle.bind(this)}/>
            </Form.Field>
            {this.getIngredientList()}
            <Form.Field>
                <Dropdown
                placeholder='Tags' clearable fluid multiple search selection allowAdditions
                onChange={this.changeTags.bind(this)}
                options={this.state.tagsBase}
                onAddItem={this.addTagsBase.bind(this)}
                value = {this.state.tags}
                 />               
            </Form.Field> 
            {this.getEditor()}
        </Form>
    }

    getMenu(){
        return <Menu attached="top">
            <Menu.Item>
                    <Header >Добавление рецепта</Header>
            </Menu.Item>
            <Menu.Item position="right" icon="remove" as={Link} to="/" />
        </Menu>
    }

    getIngredient(id){
        return <Form.Group>
            <Form.Field><Input label="Ингредиент"     type="text" placeholder="Ингредиент" onChange={this.changeIngredients.bind(this, id)} /> </Form.Field>
            <Form.Field><Input label="Количество"  value={ this.state.ingredientsAmount[id] || ""} 
            type="text" placeholder="Количество" onChange={this.changeIngredientsAmount.bind(this, id)} /> </Form.Field>
        </Form.Group>
    }

    getIngredientList(){
        return <List>
            <List.Item>{this.state.ingredientsList}</List.Item>    
            <Button onClick={this.addIngredient.bind(this)} >Добавить ингредиент</Button>
            <Button onClick={this.popIngredient.bind(this)} >Удалить последний ингредиент</Button>
        </List>
    }

    getEditor(){
        return <Form.Field>
            <CKEditor
                editor={ ClassicEditor }
                onChange={this.changeDescription.bind(this)}
                data={this.state.description} 
            />
        </Form.Field>
    }
}

export default RecipeCreator;