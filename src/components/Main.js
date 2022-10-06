import React from 'react';

export default function Main () {
    return(
        <main>
            <div className="form">
                <input 
                    type='text'
                    placeholder='Top text'
                    className="form--input"
                />
                <input 
                    type='text'
                    placeholder='Bottom text'
                    className="form--input"
                />
                <button 
                    className="form--button"
                >
                    Get new meme image
                </button>
            </div>
            <div>
                <img src="http://i.imgflip.com/1bij.jpg"/>
                <h2 className="meme--text top"></h2>
                <h2 className="meme--text bottom"></h2>
            </div>
        </main>
    )
}