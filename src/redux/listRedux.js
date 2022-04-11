
export const getValue = ({list}) => list.value
export const getResult = ({list}) => list.result
export const getCurrency = ({list}) => list.currency
export const getTypeOperation = ({list}) => list.typeOperation

const reducerName = 'list';
const createActionName = name => `app/${reducerName}/${name}`;

const CHANGE_VALUE = createActionName('CHANGE_VALUE')
export const changeValue = payload => ({payload, type: CHANGE_VALUE})

const CHANGE_CURRENCY = createActionName('CHANGE_CURRENCY')
export const changeCurrency = payload => ({payload, type: CHANGE_CURRENCY})

const CHANGE_TYPEOPERATION = createActionName('CHANGE_TYPEOPERATION');
export const changeTypeOperation = payload => ({payload, type: CHANGE_TYPEOPERATION})

const CHANGE_RESULT = createActionName('CHANGE_RESULT')
export const changeResult = payload => ({payload, type: CHANGE_RESULT})


export default function reducer(statePart=[], action={}) {
    switch(action.type) {
        case CHANGE_VALUE:
            return {...statePart,
            value: action.payload}
        case CHANGE_CURRENCY:
            return {...statePart,
            currency: action.payload}
        case CHANGE_TYPEOPERATION:
            return {...statePart,
            typeOperation: action.payload}
        case CHANGE_RESULT:
            return {...statePart,
            result: action.payload}
    }
    return statePart
}