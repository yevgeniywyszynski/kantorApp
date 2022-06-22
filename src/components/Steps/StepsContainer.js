import { connect } from "react-redux";
import Steps from '../Steps/Steps';
import { addTransaction } from "../../redux/transactionHistoryRedux";
import { getAmount, getFrom, getTo, getResult, changeAmount, changeResult,loadMoneyRequest, getData, changeValid } from '../../redux/selectMoneyRedux';

const mapStateToProps = (state) => ({
    fromRedux: getFrom(state),
    toRedux: getTo(state),
    amountRedux: getAmount(state),
    resultRedux: getResult(state),
    dataRedux: getData(state)
})

const mapDispatchToProps = dispatch => ({
    addTransaction: operationObj => dispatch(addTransaction(operationObj)),
    changeAmount: (amount) => dispatch(changeAmount(amount)),
    changeResult: (result) => dispatch(changeResult(result)),
    changeValid: (value) => dispatch(changeValid(value)),
    loadMoneyRequest: (from, to, amount, isValid) => dispatch(loadMoneyRequest(from, to, amount, isValid))
})

export default connect(mapStateToProps, mapDispatchToProps)(Steps);