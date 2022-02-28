import { connect } from 'react-redux';
import { getDataForEur, getDataForFrank, getDataForFunt, getDataForUsd, loadRatingsRequest } from '../../redux/ratingsRedux';
import Info from './Info';

const mapstateToProps = state => ({
    usd: getDataForUsd(state),
    euro: getDataForEur(state),
    funt: getDataForFunt(state),
    frank: getDataForFrank(state)
})
const mapDispatchToProps = dispatch => ({
    loadRatingsRequest: () => dispatch(loadRatingsRequest()),
})

export default connect(mapstateToProps, mapDispatchToProps)(Info);