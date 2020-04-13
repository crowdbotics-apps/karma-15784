import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard128516Reducer from '../features/Dashboard128516/redux/reducers'
import SignIn128514Reducer from '../features/SignIn128514/redux/reducers'
import SignUp128513Reducer from '../features/SignUp128513/redux/reducers'
import Dashboard128510Reducer from '../features/Dashboard128510/redux/reducers'
import Dashboard228509Reducer from '../features/Dashboard228509/redux/reducers'
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
Dashboard128516: Dashboard128516Reducer,
SignIn128514: SignIn128514Reducer,
SignUp128513: SignUp128513Reducer,
Dashboard128510: Dashboard128510Reducer,
Dashboard228509: Dashboard228509Reducer,
SignIn128504: SignIn128504Reducer,
SignUp128503: SignUp128503Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});