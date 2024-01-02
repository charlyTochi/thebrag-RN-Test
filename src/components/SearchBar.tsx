import React, {useState, useCallback} from 'react';
import {TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {searchGifs, ThunkResult} from '../actions/gifActions';

const SearchBar = () => {
  const [query, setQuery] = useState<string>('');
  const dispatch = useDispatch();

  const handleSearch = useCallback(
    (text: string) => {
      setQuery(text);
      dispatch(searchGifs(text) as ThunkResult<void>);
    },
    [dispatch],
  );

  return (
    <View>
      <TextInput
        placeholder="Search for GIFs"
        value={query}
        onChangeText={handleSearch}
      />
    </View>
  );
};

export default SearchBar;
