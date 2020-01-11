const initialState = {
  data: [],
  itemData: [],
};
  
export const backEndMock = (state = initialState, action) => {
  switch (action.type) { 
    case 'FETCH_DATA':
      return { ...state, data: action.payload };
    case 'FETCH_ITEM_DATA':
      return { ...state, itemData: action.payload };
    default:
      return state;
  }
};
  