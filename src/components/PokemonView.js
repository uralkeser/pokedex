import PokemonTypeArea from './PokemonTypeArea';
import PokemonInfoArea from './PokemonInfoArea';
import PropTypes from 'prop-types';

const PokemonView = ({type, item, onClick}) =>{

  if( type === 'Detailed' ){
    return renderDetailedPokemonView({item});
  }
  else if( type === 'Summarized' ){
    return renderSummarizedPokemonView({item, onClick});
  }
  else{
    return ('Wrong Pokemon View Type');
  }
}

const renderDetailedPokemonView = ({item}) =>{
  return(
    <div className='pokemon-detailed-view'>

      <div className='image-area'>
        <div className='image-self' >
            <img  src={item.sprites.other.dream_world.front_default} alt=''/>
        </div>
        <div className='info-area'>
          <PokemonInfoArea stats={item.stats}/>
        </div>
      </div>

      <div className='name-area'>
        <h3>#{item.id}{'\t'}{item.name}</h3>
      </div>
      
      <div className='type-area'>
        <PokemonTypeArea types={item.types}/>
      </div>
      
      <div className='buttons-area'>
        <button>catch</button>
        <button>relase</button>
        <button>add to favorite</button>
        <button>remove from favorite</button>      
      </div>

    </div>
  );
}

const renderSummarizedPokemonView = ({item,onClick}) =>{
  return(
    <div className='pokemon-summarized-view' onClick={() => onClick(item)}>
      <div className='image-area'>
        <div className='image-self' >
            <img  src={item.sprites.other.dream_world.front_default} alt=''/>
        </div>
        <div className='id-area'>
          <h3>#{item.id}</h3>
        </div>
      </div>
        <h2>{item.name}</h2>
      <div>
        <PokemonTypeArea types={item.types}/>
      </div>
    </div>
  )
}

PokemonView.propTypes ={
  type: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func
}


export default PokemonView;