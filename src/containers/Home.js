import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Logo from '../components/Logo.js';
import { left, right } from '../modules/spin';

const Home = ({ flow, onLeft, onRight }) => {
  return <Logo flow={flow} onLeft={onLeft} onRight={onRight}></Logo>;
};

const mapStateToProps = (state) => ({
  flow: state.spin.flow,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      onLeft: left,
      onRight: right,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
