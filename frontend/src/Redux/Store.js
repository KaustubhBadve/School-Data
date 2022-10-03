import {
    legacy_createStore,
    applyMiddleware,
    compose,
    combineReducers,
  } from "redux";
  
  import thunk from "redux-thunk";
import { ReducerLogin } from "./Login/ReducerAuth";
import { ReducerStudent } from "./Student/ReducerStudent";

  
  const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
  const rootReducer = combineReducers({
    Auth:ReducerLogin,
    Student:ReducerStudent
  });
  
  export const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );