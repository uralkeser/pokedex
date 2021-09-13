
const PokemonTypeArea = (props)=>{
    return(
      <div className='pokemon-type-area'>
          {
            props.types.map( (element) => {
              return <li className={element.type.name} key={element.type.name}>{element.type.name}</li>
            })
          }
      </div>
    );
}

export default PokemonTypeArea;

