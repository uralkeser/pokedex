import Config  from "../config/PokedexAppConfig";
import AllPokemonsPage from "./AllPokemonsPage";
import MyPokemonsPage from "./MyPokemonsPage";
import MyFavoritePokemonsPage from "./MyFavoritePokemonsPage";

const PageNavigator = ({pageType}) => {
  if(pageType === Config.allPokemons){
    return (<AllPokemonsPage/>);
  }
  else if(pageType === Config.myPokemons){
    return (<MyPokemonsPage/>);
  }
  else if(pageType === Config.myFavoritePokemons){
    return (<MyFavoritePokemonsPage/>);
  }
  else{
    return('wrong page type parameter');
  }
}

export default PageNavigator;