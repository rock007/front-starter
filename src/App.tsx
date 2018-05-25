import * as React from 'react';
import {HashRouter as HashRouter} from 'react-router-dom';
import MainPage from './MainPage';

export default function App() {

  return (
      <HashRouter >
          <MainPage/>
      </HashRouter>
  )
  
}