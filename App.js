

import React from 'react';
import Routes from './src/navigations/Routes';
import { Provider } from 'react-redux';
import store from './src/redux/store';

function App() {


  return (
    <Provider store={store}>
      <Routes />
    </Provider>

  );
}


export default App;
