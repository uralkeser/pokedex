
const PokemonInfoArea = (props)=>{
    return(
      <div className='pokemon-info-area'>
          <ul className = 'pokemon-info-area' >
            {
              props.stats.map( (element) => { 
                return( 
                  <li key={element.stat.name}>
                    <strong>{element.stat.name}: </strong>{element.base_stat} 
                  </li>
                );
              })
            }
          </ul>
      </div>
    );
}



export default PokemonInfoArea;