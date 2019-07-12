import React from 'react';
import { Form, Dropdown} from 'semantic-ui-react';

class MultiAddDropdown extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            values: this.props.values,
            options: this.getOptions(this.props.options),
            newOptions: []
        }
    } 

    componentWillReceiveProps(nextProps){
        this.setState({values: nextProps.values, options: this.getOptions(nextProps.options),})
    }

    getOptions(values){
        return values.map((item, index) => ({key: index, text: item, value: item  }) )
    }

    adding(e, {value}){
        let newOptions = this.state.newOptions;
        newOptions.push({key: newOptions.length, text: value, value: value  });
        this.setState({options: newOptions});
    }

    changeValues(event, values){
        console.log(values)
        if(this.props.onChange)
            this.props.onChange(values.value)
    }

    createField(){
        return <Dropdown clearable fluid multiple search selection allowAdditions
        placeholder={this.props.placeholder || ""} 
        onChange={this.changeValues.bind(this)}
        onAddItem={this.adding.bind(this)}
        options={[...this.state.options.concat(this.state.newOptions)] || []}
         />    
    }

    render(){
        return <React.Fragment >
             {this.createField()}          
        </React.Fragment>
    }
}

export default MultiAddDropdown;