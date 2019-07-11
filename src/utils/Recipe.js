
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

   

    json(){
        return JSON.stringify(this);
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