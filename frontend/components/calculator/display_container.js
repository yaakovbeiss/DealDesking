import { connect } from 'react-redux';
import Display from './display';
import { receiveQuote } from '../../actions/quote_actions';

const mapDispatchToProps = dispatch => {
  return {
    receiveQuote: (quote) => dispatch(receiveQuote(quote))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Display)
