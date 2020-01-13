import React from 'react';
import Header from './common/header'
import { GlobalStyled } from './style.js'
import { Provider } from 'react-redux'
import Store from './store'

function App() {
  return (
    <Provider store={Store}>
      <GlobalStyled />
      <Header />
    </Provider>
  );
}

export default App;
