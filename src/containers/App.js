import Logo from '../components/Logo.js'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {left, right} from '../modules/spin'

const App = ({flow}) => {
  return (<Logo flow={flow} onLeft={left} onRight={right}></Logo>);
}

const mapStateToProps = (state) =>({
  flow : state.spin.flow
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  left,
  right
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
