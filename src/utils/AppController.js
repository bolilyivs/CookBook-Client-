import RestManager from './RestManager';
import Cookies from 'universal-cookie';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory(); 

export class AppController{
    constructor(){
        this.account = new Cookies().get("account");
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

        this.recipeHideUrl = this.baseUrl + "/recipe/hide/"
    
        this.successHandler = (res) => (console.log(`Sucess! : $res`));
        this.redirectLogin = this.redirectLogin.bind(this)
        this.loginUrl = this.baseUrl + "/account/login/"
        this.registrationUrl = this.baseUrl + "/account/registration/"

        this.tagsUrl = this.baseUrl + "/tag/name"
    }

    setSuccessHandler(handler){
        this.successHandler = handler;
        
        return this;
    }

    setErrorHandler(handler){
        this.redirectLogin = handler;
        
        return this;
    }

    redirectLogin(res){
        console.log("Bad", res);
        this.go("/error");
    }

    go(path){
        history.push(path);
        history.go();
    }

    /////////////////////////////////////////////
    // Recipes
    /////////////////////////////////////////////

    getRecipes(title = "", username = "", tags = [], ingredients = [], page=0, size = 10, sorting = "rating", sortingDir="desc", hide=false){
        let finder = {
            title : title,
            username : username,
            tags : tags,
            ingredients : ingredients,
            page: page,
            size: size,
            sorting: sorting,
            sortingDir: sortingDir,
            hide: hide
        }

        //console.log("finder =>", finder)
        
        new RestManager()
            .setAccount(this.account)
            .setSuccessHandler(this.successHandler)
            .setErrorHandler(this.redirectLogin)
            .setUrl(this.recipeFindUrl)
            .setData(finder)
            .post();
    }

    getRecipesCount(title = "", username = "", tags = [], ingredients = [], hide=false){
        let finder = {
            title : title,
            username : username,
            tags : tags,
            ingredients : ingredients,
            hide: hide,
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
            hide: data.hide
        };
        
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

    recipeHide(id){
        new RestManager()
            .setAccount(this.account)
            .setSuccessHandler(this.onLoadedGetRecipe.bind(this))
            .setErrorHandler(this.redirectLogin)
            .setUrl(this.recipeHideUrl+id)
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