import { useState } from "react"
export default function Body() {
    const [meme , setMeme] = useState({
        topText: "",
        bottomText: "",
        imgUrl: "http://i.imgflip.com/1bij.jpg"
    })
    function handleChange(event) {
      const {value , name} = event.currentTarget
      setMeme(prevMeme =>{
        return {
          ...prevMeme,
            [name]: value
        }
        
      })
      console.log(name);
   }
    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="Enter top text" 
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}    
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Enter bottom text"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imgUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
            <div className="downloadForm">
                <button className="downloadButton">Download meme 🖼</button>
            </div>
        </main>
    )
}