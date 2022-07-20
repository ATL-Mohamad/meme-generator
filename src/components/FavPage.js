import { useState, useEffect } from "react"

export default function FavPage(props){

  const [isSet, setIsSet] = useState(false)
  
  useEffect(() =>{
    if(props.currentFav.topText !== '' || props.currentFav.bottomText !== ''){
      setIsSet(true)
    }
  }, [])

  return(
    <div className="fav-page">
      <h2>Your current favorite meme:</h2>
      {isSet &&
        <div className="meme">
        <img src={props.currentFav.img} alt='' className="meme--image"/>
        <h2 className="meme--text top">{props.currentFav.topText}</h2>
        <h2 className="meme--text bottom">{props.currentFav.bottomText}</h2>
        </div>
      }
      {!isSet && <h2>Click on a meme to save it as your favorite</h2>}
    </div>
  )
}