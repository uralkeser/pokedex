import logoSource from '../assets/pokedex_logo.png';

const Header = () =>{
  return(
    <header className='header'>
      <img className='header-logo' src={logoSource} alt=''/>
    </header>
  )
}

export default Header;