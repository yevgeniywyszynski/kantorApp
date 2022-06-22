import { connect } from "react-redux";
import { changeFrom, changeAmount, changeTo, changeResult } from "../../redux/selectMoneyRedux";
import SelectMoney from '../SelectMoney/SelectMoney';

const mapDispatchToProps = dispatch => ({
    changeFrom: (value) => dispatch(changeFrom(value)),
    changeTo: (value) => dispatch(changeTo(value)),
    changeAmount: (value) => dispatch(changeAmount(value)),
    changeResult: (value) => dispatch(changeResult(value))
})

export default connect(null, mapDispatchToProps)(SelectMoney);