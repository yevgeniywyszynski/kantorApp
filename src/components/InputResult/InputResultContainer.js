import { connect } from "react-redux";
import { changeAmount, changeResult, changeValid, getAmount, getFrom, getResult, getTo,getValid} from "../../redux/selectMoneyRedux";
import InputResult from '../InputResult/InputResult';

const mapStateToProps = (state) => ({
    fromRedux: getFrom(state),
    toRedux: getTo(state),
    amountRedux: getAmount(state),
    resultRedux: getResult(state),
    validRedux: getValid(state)
})

const mapDispatchToProps = dispatch => ({
    changeAmount: (value) => dispatch(changeAmount(value)),
    changeResult: (value) => dispatch(changeResult(value)),
    changeValid: (value) => dispatch(changeValid(value))
})


export default connect(mapStateToProps, mapDispatchToProps)(InputResult);