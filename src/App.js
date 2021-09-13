import React, {Component}  from "react";
import Config from './config/PokedexAppConfig';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import PageNavigator from "./pages/PageNavigator";

import './App.css';

class App extends Component {
  
  state = {
    pageType: Config.allPokemons
  }

   render(){
    return (
      <div className="container">
        <Header/>
        <Navbar
          onAllPokemonsClick = { () =>  this.setState({pageType: Config.allPokemons}) }
          onMyPokemonsClick = { () =>  this.setState({pageType: Config.myPokemons}) }
          onMyFavoritePokemonsClick = { () =>  this.setState({pageType: Config.myFavoritePokemons}) }
        />
        <PageNavigator pageType={this.state.pageType}/>
      </div>
    );
  }
}

export default App;
