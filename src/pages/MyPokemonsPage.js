import React from "react";
import Config from '../config/PokedexAppConfig';
import PokemonLayout from "../components/PokemonLayout";

const MyPokemonsPage = () => {
  return (
    <PokemonLayout items={[]} onShowMoreClick={() => console.log('my pokemons')}/>
  );
}

export default MyPokemonsPage;