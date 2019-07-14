import React from 'react';
import { Form, Input} from 'semantic-ui-react';

class TitleEdit extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: this.props.value
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({data: nextProps.value})
    }

    changeValue(e){
        this.setState({value: e.target.value})
        if(this.props.onChange)
            this.props.onChange(e.target.value)
    }

    createField(){
        return <Input label="Заголовок" defaultValue={this.props.value}  type="text" placeholder="Заголовок" onChange={this.changeValue.bind(this)}/>
    }

    render(){
        return <Form.Field required>
            {this.createField()}             
        </Form.Field>
    }
}

export default TitleEdit;