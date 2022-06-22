import axios from 'axios';

/*selectros*/
export const getFrom = ({selectMoney}) => selectMoney.from;
export const getTo = ({selectMoney}) => selectMoney.to;
export const getAmount = ({selectMoney}) => selectMoney.amount;
export const getResult = ({selectMoney}) => selectMoney.result;
export const getValid = ({selectMoney}) => selectMoney.isValid;
export const getData = ({selectMoney}) => selectMoney.data;

const reducerName = 'selectMoney';
const createActionName = name => `app/${reducerName}/${name}`;

/*thunk actions*/
const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');
const LOAD_MONEY = createActionName('LOAD_MONEY');

export const startRequest = () => ({type: START_REQUEST});
export const endRequest = () => ({type: END_REQUEST});
export const errorRequest = payload => ({payload, type: ERROR_REQUEST});
export const loadMoney = payload => ({payload, type: LOAD_MONEY});

/* change action*/
const CHANGE_FROM = createActionName('CHANGE_FROM');
export const changeFrom = payload => ({payload, type: CHANGE_FROM})

const CHANGE_TO= createActionName('CHANGE_TO');
export const changeTo = payload => ({payload, type: CHANGE_TO})

const CHANGE_AMOUNT = createActionName('CHANGE_AMOUNT');
export const changeAmount = payload => ({payload, type: CHANGE_AMOUNT})

const CHANGE_RESULT = createActionName('CHANGE_RESULT');
export const changeResult = payload => ({payload, type: CHANGE_RESULT})

const CHANGE_VALID = createActionName('CHANGE_VALID');
export const changeValid = payload => ({payload, type: CHANGE_VALID})

export const loadMoneyRequest = (from, to, amount, isValid) => {
    return async dispatch => {
       dispatch(startRequest());
        
        let isoDateString = new Date().toISOString().split("T")[0];
        let infoObj = {
            from: from,
            to: to,
            amount: amount,
            data: isoDateString,
            isValid: isValid,
        }

        try{
            let allMoney = await axios.get('https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert',
                {
                headers: {
                    'X-RapidAPI-Key': '75879634b0msh030aea868ed7617p14451ajsnec37dfcfedaa',
                    'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
                },
                params: infoObj,
                }
            )
            infoObj.result = parseFloat(allMoney.data.result).toFixed(2);
            dispatch(loadMoney({result: infoObj.result, data: infoObj.data}))
            dispatch(endRequest())
        }  catch(e) {
            console.log(e)
            dispatch(errorRequest({name: 'ERROR_REQUEST', error: 'could not fetch data'}));
        }
    }
}

export default function reducer(statePart=[], action={}) {
    switch(action.type) {
        case LOAD_MONEY:
            return {...statePart, ...action.payload}
        case START_REQUEST:
            return {...statePart, request: {pending: true, error: null, success: false}}
        case END_REQUEST: 
            return {...statePart, request: {pending: false, error: null, success: true}}
        case ERROR_REQUEST: 
            return {...statePart, request: { pending: false, error: action.error, success: false}}
        case CHANGE_FROM :
            return {...statePart, from: action.payload}
        case CHANGE_TO :
            return {...statePart, to: action.payload}
        case CHANGE_AMOUNT :
            return {...statePart, amount: action.payload}
        case CHANGE_RESULT:
            return {...statePart, result: action.payload}
        case CHANGE_VALID:
            return {...statePart, isValid: action.payload}
    }
  return statePart
}