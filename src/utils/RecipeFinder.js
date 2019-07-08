import Rest from './Rest'

class RecipeFinder{
    constructor(title = "", username = "", tags = [], ingredients = []){
        this.title = title;
        this.username = username;
        this.tags = tags;
        this.ingredients = ingredients;
    }

    getRecipes(handler){
        Rest.post("http://localhost:8080/api/recipe/find", this, handler);
    }

    json(){
        return JSON.stringify(this)
    }
}

export default RecipeFinder;