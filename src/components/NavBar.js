
export default function NavBar(){
  return(
    <div className="nav-bar">

    <div className="nav-logo">
      <img className="logo-img" src={require('../Trollface.png')} />
      <h2 className='logo-text'>MoMo's Meme Generator</h2>
    </div>

    <h4 className='nav-author'> <a href='https://github.com/ATL-Mohamad' className='nav-link'> By: Mohamad </a> </h4>

    </div>
  )
}