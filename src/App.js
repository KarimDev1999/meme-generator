import React, { useEffect } from 'react';
import { Header, Info, Question } from './components';
import { MemeGeneratorPage } from './pages';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMemes } from './redux/actions/memes';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';

function App() {

  const memes = useSelector(({ memes }) => memes.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMemes());

  }, [])

  return (
    <BrowserRouter>
      <Header>Memes Generator</Header>
      <div className='container'>
        <Route exact path='/meme-generator' render={() => <MemeGeneratorPage memes={memes} />} />
        <Route path='meme-generator/info' render={() => <Info />} />
        <Route path='meme-generator/question' render={() => <Question />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
