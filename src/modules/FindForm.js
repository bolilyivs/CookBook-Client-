import React from 'react';
import { Form, Input, Divider, Segment, Header, Button, Dropdown } from 'semantic-ui-react';

class FindForm extends React.Component{
    constructor(props){
        super(props)

        this.options = [
            { key: 'angular', text: 'Angular', value: 'angular' },
            { key: 'css', text: 'CSS', value: 'css' },
            { key: 'design', text: 'Graphic Design', value: 'design' },
            { key: 'ember', text: 'Ember', value: 'ember' },
            { key: 'html', text: 'HTML', value: 'html' },
            { key: 'ia', text: 'Information Architecture', value: 'ia' },
            { key: 'javascript', text: 'Javascript', value: 'javascript' },
            { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
            { key: 'meteor', text: 'Meteor', value: 'meteor' },
            { key: 'node', text: 'NodeJS', value: 'node' },
            { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
            { key: 'python', text: 'Python', value: 'python' },
            { key: 'rails', text: 'Rails', value: 'rails' },
            { key: 'react', text: 'React', value: 'react' },
            { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
            { key: 'ruby', text: 'Ruby', value: 'ruby' },
            { key: 'ui', text: 'UI Design', value: 'ui' },
            { key: 'ux', text: 'User Experience', value: 'ux' },
          ]
    }

    render(){
        return <Segment className="subSideBar" inverted>
            <Form >     
                <Header size='large' color="grey">Поиск</Header>               
                <Form.Field >
                    <Input label={{icon: "search"}}  type="text" placeholder="title"  />               
                </Form.Field>
                <Form.Field>
                    <Input label={{icon: "user circle"}}  type="password" placeholder="Author"  />               
                </Form.Field>
                <Divider inverted />
                <Header size='medium' color="grey">Категории</Header>
                <Form.Field>
                    <Dropdown  placeholder='Tags' fluid multiple selection options={this.options} />               
                </Form.Field> 
                <Divider inverted />
                <Header size='medium' color="grey">Ингредиенты</Header>
                <Form.Field>
                <Dropdown
                    placeholder='Ingredients' fluid multiple search selection options={this.options}/>               
                </Form.Field>  
                <Divider inverted />
                <Button.Group widths='2'>
                    <Button type="submit" >Поиск</Button>
                </Button.Group>  
            </Form>                
        </Segment>
    }
}

export default FindForm;