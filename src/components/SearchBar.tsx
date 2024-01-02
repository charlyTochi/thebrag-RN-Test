import React, {useState, useCallback} from 'react';
import {Platform, StyleSheet, TextInput, View} from 'react-native';
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
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Search for GIFs"
        value={query}
        onChangeText={handleSearch}
        placeholderTextColor="#888"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="default"
        returnKeyType="search"
        backgroundColor="#fff"
        {...Platform.select({
          ios: {
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowOffset: {width: 0, height: 4},
            shadowOpacity: 0.8,
            shadowRadius: 8,
          },
          android: {
            elevation: 8,
          },
        })}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    margin: 10,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.8,
        shadowRadius: 8,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#333',
  },
});

export default SearchBar;
