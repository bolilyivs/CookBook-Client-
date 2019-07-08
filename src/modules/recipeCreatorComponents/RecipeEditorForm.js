import React from 'react';
import { Form } from 'semantic-ui-react';
import IngredientField from "./IngredientField"
import EditorField from "./EditorField"
import TagsField from "./TagsField"
import TitleField from "./TitleField"
import Recipe from "../../utils/Recipe"

class RecipeEditorForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            recipe: this.props.value || new Recipe(),
        }
    }

    changeTitle(value){
        let recipe = this.state.recipe;
        recipe.title = value;
        this.setRecipeState(recipe);
    }

    changeIngredinet(value){
        let recipe = this.state.recipe;
        recipe.ingredients = value;
        this.setRecipeState(recipe);
    }

    changeTags(value){
        let recipe = this.state.recipe;
        recipe.tags = value;
        this.setRecipeState(recipe);
    }

    changeEditor(value){
        let recipe = this.state.recipe;
        recipe.description = value;
        this.setRecipeState(recipe);
    }

    setRecipeState(recipe){
        this.setState({recipe})
        if(this.props.onChange)
            this.props.onChange(recipe)
    }

    render(){
        return  <Form widths='equal'>
                    <TitleField 
                        value={this.state.recipe.title}
                        onChange={this.changeTitle.bind(this)}/>
                    <IngredientField
                        values={this.state.recipe.ingredients}
                        onChange={this.changeIngredinet.bind(this)}/>
                    <TagsField 
                        values={this.state.recipe.tags} 
                        tags={["tag2", "tag1", "tag3"]}
                        onChange={this.changeTags.bind(this)}/>
                    <EditorField 
                        value={this.state.recipe.description}
                        onChange={this.changeEditor.bind(this)}/>     
                </Form>     
    }
}

export default RecipeEditorForm;