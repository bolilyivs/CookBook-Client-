import React from 'react';
import { Form, Dropdown} from 'semantic-ui-react';

class TagsField extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            values: this.props.values,
            tags: this.getOptions(this.props.tags),
        }
    } 

    componentWillReceiveProps(nextProps){
        this.setState({values: nextProps.values})
    }

    getOptions(values){
        return values.map((item, index) => ({key: index, text: item, value: item  }) )
    }

    changeValues(event, values){
        this.setState({values: values.value})
        if(this.props.onChange)
            this.props.onChange(values.value)
    }

    createField(){
        return <Dropdown
        placeholder='Tags' clearable fluid multiple search selection 
        onChange={this.changeValues.bind(this)}
        options={this.state.tags}
        value={this.state.values}
         />    
    }

    render(){
        return <Form.Field >
            <label>Категории</label>
            {this.createField()}             
        </Form.Field>
    }
}

export default TagsField;