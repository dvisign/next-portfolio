export const initailState = {
  index : ''
};

const reducer = (state = initailState, action) => {
  switch(action.type) {
    default: {
      return {
        ...state
      }
    }
  }
}

export default reducer;