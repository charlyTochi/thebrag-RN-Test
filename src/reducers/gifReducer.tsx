// reducers/gifReducer.ts
interface GifState {
  gifs: any[]; // Adjust the type based on the actual structure of your GIF object
  isLoading: boolean;
  initialLoad: boolean; // Add initialLoad property
}

const initialState: GifState = {
  gifs: [],
  isLoading: false,
  initialLoad: true, // Set initialLoad to true initially
};

const gifReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_GIFS':
      return {
        ...state,
        gifs: action.payload,
        isLoading: false,
        initialLoad: false, // Set initialLoad to false when GIFs are loaded
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
        // Keep initialLoad as it is for other loading states
      };
    default:
      return state;
  }
};

export default gifReducer;

// RootState type for the whole Redux store
export type RootState = ReturnType<typeof gifReducer>;
