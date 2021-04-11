import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import AppReducer from "../reducers/App.reducer";

const initialState = {};

const rootReducer = combineReducers({
  AppReducer: AppReducer,
});

const composeEnhancers =
  (process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(rootReducer, enhancer);

export default store;
