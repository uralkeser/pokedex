import React, {useState, useEffect}  from "react";
import Config from '../config/PokedexAppConfig';
import PokemonLayout from "../components/PokemonLayout";

const AllPokemonsPage = () => {

  const [shownPokemons, setShownPokemons] = useState([]);
  const [offset, setOffset] = useState(Config.shownPokemonStartIndex);
  
  useEffect( () => {
    getAllPokemons();
  },[offset]);

  const getAllPokemons = () => {
    fetch(`${Config.listPokemonUrl}${offset}`) //get pokemon list from api
     .then((response) => response.json())
     .then((jsonResponse) => {
       jsonResponse.results.forEach((pokemon)=>{
         fetch(`${Config.detailedPokemonUrl}${pokemon.name}`) //get pokemon deatails from api
         .then((response) => response.json())
         .then((jsonResponse) => {
          setShownPokemons(currentPokemons => [...currentPokemons,jsonResponse]);
         }).catch((err) => console.log(err));
       })
    }).catch((err) => console.log(err));
  }

  return (
    <PokemonLayout items={shownPokemons} onShowMoreClick={() => setOffset(offset+Config.numberOfNewPokemonsToBeAdded)}/>
  );
}

export default AllPokemonsPage;