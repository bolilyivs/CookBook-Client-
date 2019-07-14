import React from 'react';
import './styles/App.css';
import HiderBar from "./modules/HiderBar";
import MainMenu from "./modules/MainMenu";
import RecipeGridPage from "./pages/RecipeGridPage";
import RecipePage from "./pages/RecipePage";
import RecipeCreatorPage from "./pages/RecipeCreatorPage";
import TestPage from "./pages/TestPage";
import RecipeDeletePage from "./pages/RecipeDeletePage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import RegistrationPage from "./pages/RegistrationPage";
import { Switch, Route } from 'react-router-dom';
import MainPage from "./pages/MainPage";
import ErrorPage from "./pages/ErrorPage";
import SuccessPage from "./pages/SuccessPage";

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      showMenu: true,


    };
  }

  render(){
    return (
      <div className="App pagebg">
          <HiderBar />
          <MainMenu />
          <Switch>
              <Route exact path="/" render = { props => <MainPage />}/>  
              <Route exact path="/recipe/" render = { props => <RecipeGridPage/>}/>
              <Route exact path="/recipe/find" render = { props => <RecipeGridPage/>}/>
              <Route exact path="/recipe/find/:tag" render = { props => <RecipeGridPage tag={props.match.params.tag}/>}/>
              <Route exact path="/recipe/my" render = { props => <RecipeGridPage my />}/>
              <Route exact path="/recipe/my/:tag" render = { props => <RecipeGridPage my tag={props.match.params.tag}/>}/>
              <Route exact path="/recipe/create"  render = { props => <RecipeCreatorPage />} />
              <Route exact path="/recipe/show/:number"  render = { props => <RecipePage number={props.match.params.number}  />}/>
              <Route exact path="/recipe/edit/:number"  render = { props => <RecipeCreatorPage number={props.match.params.number} />}/>
              <Route exact path="/recipe/remove/:number"  render = { props => <RecipeDeletePage  number={props.match.params.number} />}/>
              <Route exact path="/test"  render = { props => <TestPage/>}/>
              <Route exact path="/account/login" render = { props => <LoginPage />}/>
              <Route exact path="/account/logout" render = { props => <LogoutPage />}/>
              <Route exact path="/account/registration" component={RegistrationPage}/>
              <Route exact path="/error"  render = { props => <ErrorPage/>}/>
              <Route exact path="/success"  render = { props => <SuccessPage/>}/>
          </Switch>
      </div>
    );
  }
  
  
}

export default App;
