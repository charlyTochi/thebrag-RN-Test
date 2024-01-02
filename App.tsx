import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store/configureStore';
import SearchBar from './src/components/SearchBar';
import GifList from './src/components/GifList';
import {View} from 'react-native';

const App = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{marginTop: 40}}>
      <Provider store={store}>
        <SearchBar />
        <GifList />
      </Provider>
    </View>
  );
};

export default App;
