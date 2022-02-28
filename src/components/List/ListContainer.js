import { connect } from "react-redux";
import List from "./List";
import { getDataForEur, getDataForFrank, getDataForFunt, getDataForUsd, loadRatingsRequest } from '../../redux/ratingsRedux';
import { getCurrency, getTypeOperation, getValue, getResult, changeValue, changeCurrency, changeResult, changeTypeOperation} from "../../redux/listRedux";


const mapstateToProps = state => ({
    usd: getDataForUsd(state),
    euro: getDataForEur(state),
    funt: getDataForFunt(state),
    frank: getDataForFrank(state),
    value: getValue(state),
    currency: getCurrency(state),
    result: getResult(state),
    typeOperation: getTypeOperation(state),
})


const mapDispatchToProps = dispatch => ({
    loadRatingsRequest: () => dispatch(loadRatingsRequest()),
    changeValue: value => dispatch(changeValue(value)),
    changeCurrency: currency => dispatch(changeCurrency(currency)),
    changeResult: result => dispatch(changeResult(result)),
    changeTypeOperation: typeOperation => dispatch(changeTypeOperation(typeOperation)),
})

export default connect(mapstateToProps, mapDispatchToProps)(List);