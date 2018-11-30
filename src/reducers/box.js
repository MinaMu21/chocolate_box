//Reducer
//Initialisation state debut = tableau vide
const initialState = [];

const box = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CHOCOLATE' :
        if(state.indexOf(null) >= 0) {
          state[state.indexOf(null)] = action.name;
        } else {
          state = [ ...state, action.name];
        }
        return [...state];
  
      case 'EAT_ONE' :
        state.splice(action.index,1, null);
        return [ ...state];
  
      case 'CLEAR_BOX' :
        return initialState;
      default :
        return state; 
    }
  };
export default box;