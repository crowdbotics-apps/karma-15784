import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn128504Reducer from '../features/SignIn128504/redux/reducers'
import SignUp128503Reducer from '../features/SignUp128503/redux/reducers'
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn128504: SignIn128504Reducer,
SignUp128503: SignUp128503Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});