import { connect } from 'react-redux';
import Make from './make';
import { receiveQuote } from '../../actions/quote_actions';

const mapStateToProps = ({ quote }) => {
  return {
    currentQuote: quote.currentQuote,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    receiveQuote: (quote) => dispatch(receiveQuote(quote))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Make)
