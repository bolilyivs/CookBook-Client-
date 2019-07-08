import Rest from './Rest'

class Recipe{
    constructor(id = 0, title = "", description="", rating = 0, account = "", tags = [], ingredients = []){
        this.id = id
        this.title = title;
        this.description = description;
        this.rating = rating;
        this.account = account;     
        this.tags = tags;
        this.ingredients = ingredients;
        this.onLoaded = () => {};
    }

    recive(id){
        Rest.get("http://localhost:8080/api/recipe/"+id, this.load.bind(this))
        return this;
    }

    crate(){
        Rest.post("http://localhost:8080/api/recipe/", this.getObject(), () => (console.log("Good")))
        return this;
    }

    update(){
        Rest.put("http://localhost:8080/api/recipe/"+this.id+"/update", this.getObject(), () => (console.log("Good")))
        return this;
    }

    delete(id){
        this.id = id;
        Rest.delete("http://localhost:8080/api/recipe/"+this.id+"/delete", () => (console.log("Good")))
        return this;
    }

    setLoadedHendle(handler){
        this.onLoaded = handler;
        return this;
    }

    json(){
        return JSON.stringify(this);
    }

    load(recipe){
        let rec = recipe.data;
        this.id = rec.id;
        this.title = rec.title;
        this.description = rec.description;
        this.rating = rec.rating;
        this.account = rec.account.username;     
        this.tags = rec.tags.map(item => item.title);
        this.ingredients = rec.ingredients.map(item => ({"title" : item.title, "amount": item.amount }));
        this.onLoaded(this);
    }

    getObject(){
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            ingredients: this.ingredients.map(item => item),
            tags: this.tags.map(item => item),
            rating: this.rating,
            account: this.account
        };
    }

    toString(){
        return `id: ${this.id};\n title: ${this.title};\n  description: ${this.description};\n`
    }
}

export default Recipe;