import React from 'react';
import { Form, Input, Divider, Segment, Header, Button, Redirect } from 'semantic-ui-react';
import MultiAddDropdown from "../components/common/MultiAddDropdown"
import { withRouter } from 'react-router-dom';
import {AppController} from "../utils/AppController";
import { Link } from 'react-router-dom'

class FindForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title: "",
            username: "",
            tags: [],
            ingredients: [],
            tagOptions: [],
            ingredientOptions: [],
        }  

        new AppController().setSuccessHandler(this.getTagOptions.bind(this)).getTags();
    }

    getTagOptions(options){
        console.log(options)
        this.setState({tagOptions: options.data.map( val => val.name)});
    }

    titleChange(e){
        this.setState({title: e.target.value});
    }

    usernameChange(e){
        this.setState({username: e.target.value});
    }

    tagsChange(value){
        console.log(this.state)
        this.setState({tags: value});
    }

    ingredientsChange(value){
        this.setState({ingredients: value});
    }

    submit(){
        if(this.props.onSubmit){
            this.props.onSubmit({
                title: this.state.title,
                username: this.state.username,
                tags: this.state.tags,
                ingredients: this.state.ingredients,
            })
        }
    }
    render(){
        return <div>
            <Segment attached="top">
                <Form >     
                    <Header size='large' color="grey">Фильтр</Header>               
                    <Form.Field >
                        <Input label={{icon: "search"}}  type="text" placeholder="title" onChange={this.titleChange.bind(this)} />               
                    </Form.Field>
                    <Form.Field>
                        <Input label={{icon: "user circle"}}  type="text" placeholder="Author" onChange={this.usernameChange.bind(this)} />               
                    </Form.Field>
                    <Divider inverted />
                    <Header size='medium' color="grey">Категории</Header>
                    <Form.Field>
                        <MultiAddDropdown  placeholder='Tags' onChange={this.tagsChange.bind(this)} options={this.state.tagOptions} />               
                    </Form.Field> 
                    <Divider inverted />
                    <Header size='medium' color="grey">Ингредиенты</Header>
                    <Form.Field>
                        <MultiAddDropdown placeholder='Ingredients' onChange={this.ingredientsChange.bind(this)} options={this.state.ingredientOptions}/>               
                    </Form.Field>  
                    <Divider inverted /> 
                </Form>                
            </Segment>
            <Button attached="bottom" color="blue" icon='filter' size='big' content="Применить" onClick={this.submit.bind(this)} />
        </div>
    }
}

export default withRouter(FindForm);