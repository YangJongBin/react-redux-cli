import logo from '../logo.svg';
import '../css/App.css';

const Logo = ({flow}) => {
    return ( 
        <div className="logo">
         <img src={logo} className="App-logo" alt="logo" style={{animationName: flow + '-spin'}}/>
        </div>
  )
}

export default Logo;