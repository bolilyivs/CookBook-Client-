import React from 'react';
import { Form, Input, Divider, Segment, Header, Button, Menu, Grid, Radio, Checkbox } from 'semantic-ui-react';
import MultiAddDropdown from "../components/common/MultiAddDropdown"
import {AppController} from "../utils/AppController";
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie';

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
            sorting: "rating",
            sortingDir: "desc",
            hide: false
        }  

        new AppController().setSuccessHandler(this.getTagOptions.bind(this)).getTags();
    }

    getTagOptions(options){
        this.setState({tagOptions: options.data.map( val => val.name)});
    }

    titleChange(e){
        this.setState({title: e.target.value});
    }

    usernameChange(e){
        this.setState({username: e.target.value});
    }

    tagsChange(value){
        this.setState({tags: value});
    }

    ingredientsChange(value){
        this.setState({ingredients: value});
    }

    sortingChange(e, { value }){
        this.setState({ sorting: value })
    }

    sortingDirChange(e, { value }){
        this.setState({ sortingDir: value })
    }

    hideChange(e, { value }){
        this.setState({ hide: !this.state.hide })
    }

    submit(){
        console.log(this.state.hide)
        if(this.props.onSubmit){
            this.props.onSubmit({
                title: this.state.title,
                username: this.state.username,
                tags: this.state.tags,
                ingredients: this.state.ingredients,
                sorting: this.state.sorting,
                sortingDir: this.state.sortingDir,
                hide: this.state.hide,
            })
        }
    }

    getSubMenu(){
        return this.state.tagOptions.map((item, index) => <Menu.Item key={index} content={item} as={Link}to={"/recipe/find/" + item}/>);
    }

    getSortingPanel(){
        return <div>
            <h3>Сортировка</h3>
            <Form.Field>
                <Radio
                    label='По названию'
                    name='sorting'
                    value='title'
                    checked={this.state.sorting === 'title'}
                    onChange={this.sortingChange.bind(this)}
                />
            </Form.Field>
            <Form.Field>
                <Radio
                    label='По рейтингу'
                    name='sorting'
                    value='rating'
                    checked={this.state.sorting === 'rating'}
                    onChange={this.sortingChange.bind(this)}
                />
            </Form.Field>
            <Form.Field>
                <Radio
                    label='В порядке создания'
                    name='sorting'
                    value='last'
                    checked={this.state.sorting === 'last'}
                    onChange={this.sortingChange.bind(this)}
                />
            </Form.Field>
        </div>
    }

    getSortingDirPanel(){
        return <div>
            <h3>Направление</h3>
            <Form.Field>
                <Radio
                    label='По возрастанию'
                    name='sortingDiv'
                    value='asc'
                    checked={this.state.sortingDir === 'asc'}
                    onChange={this.sortingDirChange.bind(this)}
                />
            </Form.Field>
            <Form.Field>
                <Radio
                    label='По убыванию'
                    name='sortingDiv'
                    value='desc'
                    checked={this.state.sortingDir === 'desc'}
                    onChange={this.sortingDirChange.bind(this)}
                />
            </Form.Field>
        </div>
    }

    getHideToggle(){
        let account = new Cookies().get("account");
        if(account.roles && account.roles.includes("ROLE_ADMIN")){
            return  <React.Fragment>
            <Divider inverted /> 
                <Form.Field>
                    <Checkbox  onChange={this.hideChange.bind(this)} toggle label="Показать скрытые"/>               
                </Form.Field>  
            </React.Fragment>
        }
        return ""  
    }


    render(){
        return <Grid>
            <Grid.Row>
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
                        <MultiAddDropdown onChange={this.tagsChange.bind(this)} options={this.state.tagOptions} />               
                    </Form.Field> 
                    <Divider inverted />
                    <Header size='medium' color="grey">Ингредиенты</Header>
                    <Form.Field>
                        <MultiAddDropdown placeholder='Ingredients' onChange={this.ingredientsChange.bind(this)} options={this.state.ingredientOptions}/>               
                    </Form.Field>  

                        {this.getHideToggle()}
                    <Divider inverted /> 
                        {this.getSortingPanel()}
                    <Divider inverted /> 
                        {this.getSortingDirPanel()}
                </Form>                
            </Segment>
            <Button fluid attached="bottom" color="blue" icon='filter' size='big' content="Применить" onClick={this.submit.bind(this)} />

            <Menu pointing  vertical fluid>
                <Menu.Item><Menu.Header  content="Категории"/></Menu.Item>
                <Menu.Item content="Все" as={Link} to={"/recipe/"}/>
                {this.getSubMenu()}
            </Menu>
            </Grid.Row>
        </Grid>
    }
}

export default FindForm;