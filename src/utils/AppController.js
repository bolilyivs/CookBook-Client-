import RestManager from './RestManager';
import Cookies from 'universal-cookie';

export class AppController{
    constructor(){

        this.account = new Cookies().get("account");
        console.log(this.account)
        if(!this.account )
            this.account ={
                username: "",
                password: ""
            }
        this.clientUrl = "http://localhost:3000"
        this.baseUrl = "http://localhost:8080/api"
        this.recipeUrl = this.baseUrl + "/recipe/"
        this.recipeFindUrl = this.baseUrl + "/recipe/find"
        this.recipeFindCountUrl = this.baseUrl + "/recipe/find/count"
        this.recipeCreateUrl = this.baseUrl + "/recipe/create"
        this.recipeUpdateUrl = this.baseUrl + "/recipe/update/"
        this.recipeDeleteUrl = this.baseUrl + "/recipe/delete/"
        this.recipeRatingPlusUrl = this.baseUrl + "/recipe/rating/plus/"
        this.recipeRatingMinusUrl = this.baseUrl + "/recipe/rating/minus/"
    
        this.successHandler = (res) => (console.log(`Sucess! : $res`));
        this.redirectLogin = this.redirectLogin.bind(this)
        this.loginUrl = this.baseUrl + "/account/login/"
        this.registrationUrl = this.baseUrl + "/account/registration/"

        this.tagsUrl = this.baseUrl + "/tag/name"
    }

    setAccount(account){
        console.log("Вход в setAccount")
        //this.account = account;
        return this;
    }

    setSuccessHandler(handler){
        this.successHandler = handler;
        
        return this;
    }

    redirectLogin(res){
        console.log("Bad", res);
        //document.location.href = this.clientUrl + '/account/login'
    }

    /////////////////////////////////////////////
    // Recipes
    /////////////////////////////////////////////

    getRecipes(title = "", username = "", tags = [], ingredients = [], page=0, size = 10){
        let finder = {
            title : title,
            username : username,
            tags : tags,
            ingredients : ingredients,
            page: page,
            size: size
        }

        console.log("finder =>", finder)
        
        new RestManager()
            .setAccount(this.account)
            .setSuccessHandler(this.successHandler)
            .setErrorHandler(this.redirectLogin)
            .setUrl(this.recipeFindUrl)
            .setData(finder)
            .post();
    }

    getRecipesCount(title = "", username = "", tags = [], ingredients = [], page=1, size = 10){
        let finder = {
            title : title,
            username : username,
            tags : tags,
            ingredients : ingredients,
        }
        
        new RestManager()
            .setAccount(this.account)
            .setSuccessHandler(this.successHandler)
            .setErrorHandler(this.redirectLogin)
            .setUrl(this.recipeFindCountUrl)
            .setData(finder)
            .post();
    }

    getRecipe(id){
        new RestManager()
            .setAccount(this.account)
            .setSuccessHandler(this.onLoadedGetRecipe.bind(this))
            .setErrorHandler(this.redirectLogin)
            .setUrl(this.recipeUrl + id)
            .get();
    }

    onLoadedGetRecipe({data}){
        
        let recipe = {
            id : data.id,
            title : data.title,
            description : data.description,
            rating : data.rating,
            account : data.account.username,     
            tags : data.tags.map(item => item.title),
            ingredients : data.ingredients.map(item => ({"title" : item.title, "amount": item.amount })),
        };
        console.log(this.successHandler);
        this.successHandler(recipe);
    }

    createRecipe(data){
        new RestManager()
            .setAccount(this.account)
            .setSuccessHandler(this.successHandler)
            .setErrorHandler(this.redirectLogin)
            .setUrl(this.recipeCreateUrl)
            .setData(data)
            .post();
    }

    updateRecipe(data){
        new RestManager()
            .setAccount(this.account)
            .setSuccessHandler(this.successHandler)
            .setErrorHandler(this.redirectLogin)
            .setUrl(this.recipeUpdateUrl+data.id)
            .setData(data)
            .put();
    }

    deleteRecipe(id){
        console.log(this.recipeDeleteUrl+id)
        new RestManager()
            .setAccount(this.account)
            .setSuccessHandler(this.successHandler)
            .setErrorHandler(this.redirectLogin)
            .setUrl(this.recipeDeleteUrl+id)
            .delete();
    }

    ratingPlusRecipe(id){
        new RestManager()
            .setAccount(this.account)
            .setSuccessHandler(this.onLoadedGetRecipe.bind(this))
            .setErrorHandler(this.redirectLogin)
            .setUrl(this.recipeRatingPlusUrl+id)
            .get();
    }

    ratingMinusRecipe(id){
        new RestManager()
            .setAccount(this.account)
            .setSuccessHandler(this.onLoadedGetRecipe.bind(this))
            .setErrorHandler(this.redirectLogin)
            .setUrl(this.recipeRatingMinusUrl+id)
            .get();
    }

    /////////////////////////////////////////////
    // Account
    /////////////////////////////////////////////

    login(){
        new RestManager()
            .setAccount(this.account)
            .setSuccessHandler(this.successHandler)
            .setErrorHandler(this.redirectLogin)
            .setUrl(this.loginUrl)
            .get();
    }

    registration(data){
        new RestManager()
            .setSuccessHandler(this.successHandler)
            .setErrorHandler(this.redirectLogin)
            .setUrl(this.registrationUrl)
            .setData(data)
            .post();
    }


    ///////////////////////////////////////
    // Tags
    //////////////////////////////////////
    getTags(){
        new RestManager()
            .setAccount(this.account)
            .setSuccessHandler(this.successHandler.bind(this))
            .setUrl(this.tagsUrl)
            .get();
    }
    
}

export default AppController;