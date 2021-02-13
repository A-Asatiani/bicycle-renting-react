import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { loginReducer } from "../reducers/login-reducer";
import { regReducer } from "../reducers/registration-reducer";

const rootReducer = combineReducers({
  loginReducer: loginReducer,
  regReducer: regReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
