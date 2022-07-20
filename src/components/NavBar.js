
export default function NavBar(props){
  return(
    <div className="nav-bar">

    <div className="nav-logo" onClick={() => props.handleClick('main')}>
      <img className="logo-img" src={require('../Trollface.png')} alt=''/>
      <h2 className='logo-text'>MoMo's Meme Generator</h2>
    </div>

    <div className='nav-account'>
      {!props.logInStatus && <button className='nav-login' onClick={() => props.handleClick('login')}>Sign in</button>}
      {props.logInStatus && <button className='nav-login' onClick={() => props.handleClick('login')}>Switch account</button>}
      <button className='nav-my-favorite'onClick={() => props.handleClick('fav')}>My Favorite</button>
    </div>

    </div>
  )
}