import React from 'react';
import './styles/App.css';
import SideBar from "./modules/SideBar";
import HiderBar from "./modules/HiderBar";
import RecipeGridPage from "./pages/RecipeGridPage";
import RecipePage from "./pages/RecipePage";
import RecipeCreatorPage from "./pages/RecipeCreatorPage";
import TestPage from "./pages/TestPage";
import RecipeDeletePage from "./pages/RecipeDeletePage";
import { Switch, Route } from 'react-router-dom';

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      showMenu: true
    };

    this.showMenu = e => {
      var vis = this.state.showMenu ? false : true;
      console.log(vis)
      this.setState({showMenu: vis});
    }
  }

  render(){
    return (
      <div className="App">
        <SideBar visible={this.state.showMenu}>
          <HiderBar onShowMenu={this.showMenu }/>
          <Switch>
            <Route exact path="/" component={RecipeGridPage}/>
            <Route exact path="/recipe/create" component={RecipeCreatorPage}/>
            <Route exact path="/recipe/:number" component={RecipePage}/>
            <Route exact path="/recipe/:number/edit" component={RecipeCreatorPage}/>
            <Route exact path="/recipe/:number/remove" component={RecipeDeletePage}/>
            <Route exact path="/test" component={TestPage}/>
          </Switch>
        </SideBar>      
      </div>
    );
  }
  
  
}

export default App;
