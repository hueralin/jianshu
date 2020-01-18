import React, { Fragment } from 'react';
import Header from './common/header'
import { GlobalStyled } from './style.js'
import { Provider } from 'react-redux'
import Store from './store'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'

function App() {
  return (
    <Provider store={Store}>
      <GlobalStyled />
      <Fragment>
        <Header />
        <BrowserRouter>
          <div>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
          </div>
        </BrowserRouter>
      </Fragment>
    </Provider>
  );
}

export default App;
