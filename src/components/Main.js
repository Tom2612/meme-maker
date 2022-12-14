import React, { useState, useEffect} from 'react';

export default function Main () {
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        imageUrl: 'http://i.imgflip.com/1bij.jpg'
    })
    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        async function getMemes() {
            const res = await fetch('https://api.imgflip.com/get_memes');
            const data = await res.json();
            setAllMemes(data.data.memes)
        }
        getMemes();
    }, [])

    function getMemeImage() {
        let randomNum = Math.floor(Math.random() * allMemes.length);
        let randomMeme = allMemes[randomNum]
        while (randomMeme.box_count > 2) {
            randomMeme = allMemes[Math.floor(Math.random() * allMemes.length)];
        }
        setMeme(prev => ({
            ...prev,
            imageUrl: randomMeme.url
        }))
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setMeme(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return(
        <main>
            <div className="form">
                <input 
                    type='text'
                    placeholder='Top text'
                    className="form--input"
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                />
                <input 
                    type='text'
                    placeholder='Bottom text'
                    className="form--input"
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                />
                <button 
                    onClick={getMemeImage}
                    className="form--button"
                >
                    Get new meme image
                </button>
            </div>
            <div className="meme">
                <img className="meme--image" src={meme.imageUrl}/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}