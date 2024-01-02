// actions/gifActions.ts
import axios from 'axios';
import {Dispatch} from 'redux';

const setGifs = (gifs: any) => ({
  type: 'SET_GIFS',
  payload: gifs,
});

const setLoading = (isLoading: boolean) => ({
  type: 'SET_LOADING',
  payload: isLoading,
});

export const searchGifs = (query: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoading(true)); // Set isLoading to true when starting the search
    const response = await axios.get(
      `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=YIgFoVU5Y8vghmhTR4LmyhZffICVJHA7`,
    );
    dispatch(setGifs(response.data.data));
  } catch (error) {
    console.error('Error fetching GIFs:', error);
  } finally {
    dispatch(setLoading(false)); // Set isLoading to false when the search is complete (success or error)
  }
};
