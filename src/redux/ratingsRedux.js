import axios from 'axios';


/*Selectors*/

export const getDataForUsd = ({ratings}) => ratings.data?.dataUsd
export const getDataForEur = ({ratings}) => ratings.data?.dataEuro
export const getDataForFunt = ({ratings}) => ratings.data?.dataFunt
export const getDataForFrank = ({ratings}) => ratings.data?.dataFrank


/*Actions*/

const reducerName = 'currency';
const createActionName = name => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const LOAD_RATINGS = createActionName('LOAD_RATINGS');

export const startRequest = () => ({ type: START_REQUEST});
export const endRequest = () => ({type: END_REQUEST});
export const errorRequest = payload => ({payload, type: ERROR_REQUEST});

export const loadRatings = payload => ({payload, type: LOAD_RATINGS})



/*THUNKS*/

//uruchomic pobierania walut
export const loadRatingsRequest = () => {
    return async dispatch => {
        //ustawic dispatch na odpalenia startowego requesta
        dispatch(startRequest());

        try {
            let resUsd = await axios.get('http://api.nbp.pl/api/exchangerates/rates/c/usd/today/?format=json');
            let resEur = await axios.get('http://api.nbp.pl/api/exchangerates/rates/c/eur/today/');
            let resFunt = await axios.get('http://api.nbp.pl/api/exchangerates/rates/c/GBP/today/');
            let resFrank = await axios.get('http://api.nbp.pl/api/exchangerates/rates/c/CHF/today/')
            
            const newObj = {
              dataEuro: resEur.data,
              dataUsd: resUsd.data,
              dataFunt: resFunt.data,
              dataFrank: resFrank.data
            }
            dispatch(loadRatings(newObj));
            dispatch(endRequest())
        } catch(e) {
            dispatch(errorRequest({name: 'ERROR_REQUEST', error: 'nie da sie pobrać waluty'}))
        };
    };
}



export default function reducer(statePart=[], action={}) {
    switch(action.type) {
        case LOAD_RATINGS:
          return {...statePart, data: action.payload}
        case START_REQUEST:
          return {...statePart, request: {pending: true, error: null, success: false}}
        case END_REQUEST:
          return {...statePart, request: {pending: false, error: null, success: true}}
        case ERROR_REQUEST:
          return {...statePart, request: {pending: false, error: action.error, success: false}}
    }
  return statePart
}

