import React from 'react';
import './styles/App.css';
import SideBar from "./modules/SideBar";
import HiderBar from "./modules/HiderBar";
import RecipeGridPage from "./pages/RecipeGridPage";
import RecipePage from "./pages/RecipePage";
import RecipeCreatorPage from "./pages/RecipeCreatorPage";
import TestPage from "./pages/TestPage";
import RecipeDeletePage from "./pages/RecipeDeletePage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import { Switch, Route } from 'react-router-dom';


class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      showMenu: true,


    };

    this.showMenu = e => {
      var vis = this.state.showMenu ? false : true;
      console.log(vis)
      this.setState({showMenu: vis});
    }
  }

  loginHandler(account){
      this.setState({account: account});
  }

  render(){
    return (
      <div className="App">
        <SideBar visible={this.state.showMenu}>
          <HiderBar onShowMenu={this.showMenu }/>
          <Switch>
              <Route exact path="/" render = { props => <RecipeGridPage/>}/>
              <Route exact path="/find/:search" 
              render = { props => <RecipeGridPage  
                search= {props.match.params.search}/>}/>
              <Route exact path="/recipe/create"  render = { props => <RecipeCreatorPage />} />
              <Route exact path="/recipe/:number/show"  render = { props => <RecipePage number={props.match.params.number}  />}/>
              <Route exact path="/recipe/:number/edit"  render = { props => <RecipeCreatorPage number={props.match.params.number} />}/>
              <Route exact path="/recipe/:number/remove"  render = { props => <RecipeDeletePage  number={props.match.params.number} />}/>
              <Route exact path="/test"  render = { props => <TestPage/>}/>
              <Route exact path="/account/login" render = { props => <LoginPage />}/>
              <Route exact path="/account/registration" component={RegistrationPage}/>
          </Switch>
        </SideBar>      
      </div>
    );
  }
  
  
}

export default App;
