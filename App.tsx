import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store/configureStore';
import SearchBar from './src/components/SearchBar';
import GifList from './src/components/GifList';

const App = () => {
  return (
    <Provider store={store}>
      <SearchBar />
      <GifList />
    </Provider>
  );
};

export default App;
