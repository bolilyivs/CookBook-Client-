import React from 'react';
import { Dropdown} from 'semantic-ui-react';

class MultiAddDropdown extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            values: this.props.values,
            options: this.props.options || [],
            addingOptions: [],
        }
    } 

    componentWillReceiveProps(nextProps){
        this.setState({values: nextProps.values, options: nextProps.options})
    }

    adding(e, {value}){
        let addingOptions = this.state.addingOptions
        addingOptions.push(value)
        this.setState({addingOptions: addingOptions});
    }

    changeValues(event, values){
        if(this.props.onChange)
            this.props.onChange(values.value)
    }

    formatOption(values){
        return values.map((item, index) => ({key: index+1, text: item, value: item  }) )
    }

    comboOptions(){
        let options = this.state.options.concat(this.state.values).concat(this.state.addingOptions);
        return Array.from(new Set(options));
    }

    createField(){
        if(this.state.values)
            return <Dropdown clearable fluid multiple search selection allowAdditions
                placeholder={this.props.placeholder || ""} 
                onChange={this.changeValues.bind(this)}
                onAddItem={this.adding.bind(this)}
                options={this.formatOption(this.comboOptions())}
                value={this.state.values}
                />
        return <Dropdown clearable fluid multiple search selection allowAdditions
            placeholder={this.props.placeholder || ""} 
            onChange={this.changeValues.bind(this)}
            onAddItem={this.adding.bind(this)}
            options={this.formatOption(this.comboOptions())}
        />
    }

    render(){
        return <React.Fragment >
             {this.createField()}          
        </React.Fragment>
    }
}

export default MultiAddDropdown;