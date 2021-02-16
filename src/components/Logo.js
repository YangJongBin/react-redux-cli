import logo from '../logo.svg';
import '../css/App.css';

const Logo = ({ flow, onLeft, onRight }) => {
  const onClickEvent = () => {
    return flow === 'right' ? onLeft : onRight;
  };

  return (
    <div className="logo" onClick={onClickEvent()}>
      <img
        src={logo}
        className="App-logo"
        alt="logo"
        style={{ animationName: flow + '-spin' }}
      />
    </div>
  );
};

export default Logo;
