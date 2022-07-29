
export default function AboutPage(){
  return(
    <div className="about-page">
      <strong className="part-name">Site Description</strong>
      <p>This is a website that allows users to find a random meme 
        image and add what ever text they would like in the meme format
        You can login using the info: demo and demo, and save your favorite meme and
        its text to your My Favorite page. You can change it whenever by clicking on another 
        meme with text.
      </p>
      <strong className="part-name">Check List</strong>
      <p><strong>Data base usage:</strong> Memes Images and Users are saved in MYSQL</p>
      <p><strong>Ajax:</strong> Page uses Ajax to switch between current image and random image</p>
      <p><strong>Theme:</strong> The purple and orange theme around the site</p>
      <p><strong>New Library:</strong> On start an external api finds the top 100 meme images</p>
      <p><strong>Theme:</strong> The purple and orange theme around the site</p>
      <p><strong>JavaScript:</strong> The entire functionality of the site</p>
      <p><strong>Membership Area:</strong>By Loggin In you can save your favorite meme and text</p>
      <p><strong>General User:</strong> Any user can choose an image and text for a meme</p>
      <strong className="part-name">About Us:</strong>
      <p>My name is Mohamad, I'm a CS student at GSU. I made this site
        for everyone who goes online and sees really funny memes and thinks to themselves
        "How do I make one of those". The page isn't very intuative but has some pretty cool 
        functionality if you play with it. Hope you enjoy {'<3'}
      </p>
    </div>
  )
}