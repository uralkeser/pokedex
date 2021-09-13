import PokemonView from "./PokemonView";
import PropTypes from 'prop-types';

const PokemonGrid = ({items,onClick}) =>{
  return(
    <div className="pokemon-list-area">
    {
      items.map((element)=>{
        return (
          <PokemonView key={element.id} type='Summarized' item={element} onClick={onClick}/>
        )
      })
    }
    </div>
  );
}

PokemonGrid.propTypes ={
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
}



export default PokemonGrid;