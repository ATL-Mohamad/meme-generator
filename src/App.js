import {useState} from "react";
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";
import Meme from "./components/Meme";
import AlertBox from "./components/AlertBox";
import CurrentUser from "./components/CurrentUser";
import FavPage from "./components/FavPage";
import Footer from "./components/Footer";
import './App.css'

export default function App() {

  /* State Initialization */

  //base state for current main page component
  const [displayChoice, setDisplayChoice] = useState('main')
  
  //base state for signed in user information
  const[userInfo, setUserInfo] = useState({
    username: '',
    userpassword: ''
  })
  
  //base state for required sign in alert componenet
  const [showAlert, setShowAlert] = useState(false)

  //base state for login status
  const [logedIn, setLogedIn] = useState(false)

  //curent meme
  const[currentMeme, setCurrentMeme] = useState({
    topText: '',
    bottomText: '',
    img: 'https://i.imgflip.com/3si4.jpg'
  })

  /* State Initialization */

  //--------------------------//

  /* State change functions*/

  //current page component controller 
  function currentDisplay(option){
    if(option === 'fav' && userInfo.username === '' && userInfo.userpassword === ''){
      option = 'main'
      console.log('you have to sign in first')
      setDisplayChoice(option)
      setShowAlert(true)
      return
    }

    setShowAlert(false)
    setDisplayChoice(option)
  }

  //login controller
  function handleSubmit(username, userpassword){
    setUserInfo({
      username: username,
      password: userpassword
    })
    setShowAlert(false)
    setLogedIn(true)
    setDisplayChoice('main')
  }

  //keeps track of current meme
  function updateMeme({meme}){
    setCurrentMeme(meme)
    console.log(currentMeme)
  }

  /* State change functions*/

  return (

   <div>
    <NavBar 
      handleClick = {currentDisplay}
      logInStatus = {logedIn}
    />
    {displayChoice === 'main' && <Meme updateMeme={updateMeme}/>}
    {displayChoice === 'login' && <SignIn handleSubmit={handleSubmit}/>}
    {displayChoice === 'fav' && <FavPage currentFav={currentMeme}/>}
    {showAlert && <AlertBox />}
    {logedIn && <CurrentUser userInformation={userInfo}/>}
    <Footer />
   </div>
  
  )
}


