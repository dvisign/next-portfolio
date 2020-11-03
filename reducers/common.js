export const initailState = {
  allNav : true
};

export const NAV_USED = 'NAV_USED';

const reducer = (state = initailState, action) => {
  switch(action.type) {
    case NAV_USED : {
      return {
        ...state,
        allNav : action.data
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default reducer;