import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import ratingsRedux  from './ratingsRedux';
import listRedux from './listRedux';
import thunk from 'redux-thunk'

const initialState = {
    ratings: {},
    list: {
        value: '',
        result: '',
        currency: "Euro",
        typeOperation: "Kup",
    }
  }
  

const reducers = {
    ratings: ratingsRedux,
    list: listRedux,
}

const storeReducer = combineReducers(reducers);

const store = createStore (
    storeReducer,
    initialState,
    compose(applyMiddleware(thunk))
)

export default store;



