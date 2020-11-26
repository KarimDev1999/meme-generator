import React, { useEffect } from 'react';
import { Header, Info, Question } from './components';
import { MemeGeneratorPage } from './pages';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMemes } from './redux/actions/memes';
import { HashRouter, Route } from 'react-router-dom';
import './App.scss';

function App() {

  const memes = useSelector(({ memes }) => memes.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMemes());

  }, [])

  return (
    <HashRouter>
      <Header>Memes Generator</Header>
      <div className='container'>
        <Route exact path='/' render={() => <MemeGeneratorPage memes={memes} />} />
        <Route path='/info' render={() => <Info />} />
        <Route path='/question' render={() => <Question />} />
      </div>
    </HashRouter>
  );
}

export default App;
