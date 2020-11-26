import React, { Fragment, useState } from 'react';
import { Button } from '../components';



function MemeGeneratorPage({ memes }) {
    const [randomImg, setRandomImg] = useState('http://i.imgflip.com/1bij.jpg')
    const [topText, setTopText] = useState('Верхний текст')
    const [bottomText, setBottomText] = useState('Нижний текст')


    const handleTopChange = (e) => {
        setTopText(e.target.value)
    }
    const handleBottomChange = (e) => {
        setBottomText(e.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        const randomNumber = Math.floor(Math.random() * memes.length);
        const randomItem = memes[randomNumber].url;
        setRandomImg(randomItem);
    }

    return (
        <Fragment>
            <div className='wrap-generator'>
                <form onSubmit={onSubmit} className='meme-form'>
                    <input onChange={handleBottomChange} type="text" placeholder="Top Text" />
                    <input onChange={handleTopChange} type="text" placeholder="Bottom Text" />
                    <Button outline className='meme-btn'>Generate</Button>
                </form>

                <div download className='meme'>
                    <img download src={randomImg} alt="meme" />

                    <h2 className='top'>{bottomText}</h2>
                    <h2 className='bottom'> {topText} </h2>

                </div>
                <a className='meme__download' href={randomImg} download>Скачать оригинал картинки</a>
            </div>
        </Fragment>
    )
}

export default MemeGeneratorPage
