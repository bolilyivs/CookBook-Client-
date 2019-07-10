import React from 'react';
import { Form, Label} from 'semantic-ui-react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class EditorField extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: this.props.value || ""
        }
    }

    componentWillReceiveProps(nextProps){
        
        this.setState({data: nextProps.value})
    }

    changeData(e, editor){
        this.setState({data: editor.getData()})
        if(this.props.onChange)
            this.props.onChange(editor.getData())
    }

    createEdit(){
        return<CKEditor
                editor={ ClassicEditor }
                onChange={this.changeData.bind(this)}
                data={this.state.data} 
            />
    }

    render(){
        return <Form.Field >
            <label>Описание</label>
            {this.createEdit()}             
        </Form.Field>
    }
}

export default EditorField;