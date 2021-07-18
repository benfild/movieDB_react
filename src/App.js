import React from 'react';

//Components
import Header from './components/header'


//styles
import {GlobalStyle} from './GlobalStyle';




const App = () => {
  return (
    <div className="App">
      <Header/>
      Start here.
      <GlobalStyle/>
    </div>
  );
}

export default App;
