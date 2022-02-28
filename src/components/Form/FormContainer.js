import { connect } from 'react-redux';
import Form from './Form';
import { getValue, getResult, getCurrency, getTypeOperation, changeTypeOperation } from "../../redux/listRedux";

const mapstateToProps = state => ({
    value: getValue(state),
    typeOperation: getTypeOperation(state),
    currency: getCurrency(state),
    result: getResult(state),
})

export default connect(mapstateToProps)(Form);


