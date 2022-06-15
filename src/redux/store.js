import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import ratingsRedux  from './ratingsRedux';
import listRedux from './listRedux';
import thunk from 'redux-thunk'
import transactionHistoryRedux from '../redux/transactionHistoryRedux';

const initialState = {
    ratings: {},
    list: {
        value: '',
        result: '',
        currency: "Euro",
        typeOperation: "Kup",
    },
    transactionHistory: []
  }


const reducers = {
    ratings: ratingsRedux,
    list: listRedux,
    transactionHistory: transactionHistoryRedux
}

const storeReducer = combineReducers(reducers);

const store = createStore (
    storeReducer,
    initialState,
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

export default store;



