import {Dispatch} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {RootState} from '../reducers/gifReducer';
import axios from 'axios';
import {API_KEY} from '../constant';
interface SetGifsAction {
  type: 'SET_GIFS';
  payload: any;
}

interface SetLoadingAction {
  type: 'SET_LOADING';
  payload: boolean;
}

type GifAction = SetGifsAction | SetLoadingAction;

export type ThunkResult<R> = ThunkAction<R, RootState, undefined, GifAction>;

const setGifs = (gifs: any): SetGifsAction => ({
  type: 'SET_GIFS',
  payload: gifs,
});

const setLoading = (isLoading: boolean): SetLoadingAction => ({
  type: 'SET_LOADING',
  payload: isLoading,
});

export const searchGifs = (
  query: string,
  offset: number = 0,
): ThunkResult<void> => {
  return async (dispatch: Dispatch<GifAction>) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}&offset=${offset}`,
      );
      dispatch(setGifs(response.data.data));
    } catch (error) {
      console.error('Error fetching GIFs:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};
