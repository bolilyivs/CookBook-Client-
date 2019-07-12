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
        this.changePath = this.changePath.bind(this);
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



    changePath(){
        let path = "/find/" + this.state.title + "&" +  this.state.username + "&";
        let options = ""        
        if(this.state.tags.length > 0)
            options = this.state.tags.join(";")
        path += options + "&";
        options = []
        if(this.state.ingredients.length > 0)
            options = this.state.ingredients.join(";")
        path += options;
        return path
    }
    render(){
        return <Segment className="subSideBar" placeholder inverted>
            <Form >     
                <Header size='large' color="grey">Поиск</Header>               
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
                <Button.Group widths='2'>
                    <Button  icon='signup' size='big' content="Поиск"   as={Link} to={this.changePath()} />
                </Button.Group>  
            </Form>                
        </Segment>
    }
}

export default withRouter(FindForm);