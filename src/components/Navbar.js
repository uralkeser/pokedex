const Navbar = (props) =>{
  return(
    <nav className='navbar-area'>
      <button onClick={props.onAllPokemonsClick} >All Pokemons</button>
      <button onClick={props.onMyPokemonsClick} >My Pokemons</button>
      <button onClick={props.onMyFavoritePokemonsClick} >My Favorite Pokemons</button>
    </nav>
  )
}

export default Navbar;