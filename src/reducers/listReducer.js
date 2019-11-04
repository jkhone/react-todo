const initialState = {
  items: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    // actions
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload] }
    default:
      return state
  }
}
