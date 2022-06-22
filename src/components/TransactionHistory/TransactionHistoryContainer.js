import { connect } from "react-redux";
import TransactionHistory from "../TransactionHistory/TransactionHistory"
import { getHistory } from "../../redux/transactionHistoryRedux";


const mapstateToProps = state => ({
    history: getHistory(state)
})


export default connect(mapstateToProps, null)(TransactionHistory);