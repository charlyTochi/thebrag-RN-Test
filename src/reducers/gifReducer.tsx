interface GifState {
  gifs: any[];
  isLoading: boolean;
  initialLoad: boolean;
}

const initialState: GifState = {
  gifs: [],
  isLoading: false,
  initialLoad: true,
};

const gifReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_GIFS':
      return {
        ...state,
        gifs: action.payload,
        isLoading: false,
        initialLoad: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default gifReducer;

// RootState type for the whole Redux store
export type RootState = ReturnType<typeof gifReducer>;
