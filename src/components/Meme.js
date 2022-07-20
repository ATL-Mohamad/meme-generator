import {useState, useEffect} from "react"

export default function Meme(props){

  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    img: 'https://i.imgflip.com/3si4.jpg'
  })
  const [allMemes,setAllMemes] = useState([])

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(resData => setAllMemes(resData.data.memes))
  }, [])

  function getNewImg(){
    const randomNum = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNum].url
    setMeme(prevMeme => ({
      ...prevMeme,
      img: url
    }))
  }

  function handleChange(event){
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name] : value
    }))
  }

  function setFav(){
    props.updateMeme({meme});
  }

  return(
    <main className="main">
      <div className="form">
        <input 
          type='text' 
          placeholder="Top Text"
          name="topText"
          className="form--input"
          value={meme.topText}
          onChange={handleChange}
        />
        <input 
          type='text' 
          placeholder="Bottom Text"
          name="bottomText"
          className="form--input"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form--button" onClick={getNewImg}>Get A New Meme</button>
      </div>
      <div className="meme">
        <img src={meme.img} alt='' className="meme--image" onClick={setFav}/>
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )

}