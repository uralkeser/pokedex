import { useState } from "react";
import PokemonGrid from "./PokemonGrid";
import PokemonView from "./PokemonView";
import PropTypes from 'prop-types';

const PokemonLayout = ({items, onShowMoreClick}) =>{
  const [isPokemonDetailsShown, setIsPokemonDetailsShown] = useState(false);
  const [shownPokemon, setShownPokemon] = useState({});

  const onPokemonClick = (item) =>{
    setShownPokemon(item);
    setIsPokemonDetailsShown(true);
  }

  const onbackClick = () =>{
    setShownPokemon({});
    setIsPokemonDetailsShown(false);
  }

  return(
    isPokemonDetailsShown ?
      <div>{/*detailed pokemon view*/}
        <button className='back-button' onClick={onbackClick}>back</button>
        <PokemonView type='Detailed' item={shownPokemon}/> 
      </div>
      : 
      <div>{/*summarized pokemon view*/}
        <PokemonGrid items={items} onClick={onPokemonClick}/>
        <div className='show-more-button-area'>
          <button onClick={onShowMoreClick} >show more</button>
        </div>
      </div>
  );
}

PokemonLayout.propTypes ={
  items: PropTypes.array.isRequired,
  onShowMoreClick: PropTypes.func.isRequired,
}

export default PokemonLayout;

