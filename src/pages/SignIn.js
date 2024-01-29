import { useNavigate} from "react-router-dom";
import './SignIn.css';

const SignIn = () => {

  const navigate = useNavigate();

  return (
    <div className="sign-in">
      <div className="right-side" />
      <div className="frame-sign-in">
        <div className="frame-content">
          
        </div>
        <div className="symbols-parent">
          <img className="symbols-icon" loading="eager" alt="" src="/vector@2x.png" />
          <img className="linked-i-nlogo" loading="eager" alt="" src="/vector-1@2x.png" />
          <div className="carbonlogo-linkedin">
            <img className="symbols-icon1" loading="eager" alt="" src="/vector-2.svg" />
          </div>
          <div className="carbonlogo-discord">
            <img className="navigation-vectors-icon" loading="eager" alt="" src="/vector-3.svg" />
            <img className="navigation-vectors-icon1" alt="" src="/vector-4.svg" />
          </div>
        </div>
        <div className="navigation-vectors">
          <img className="left-side-icon" alt="" src="/left-side@2x.png" />
          <div className="ellipse-shape" />
          <img className="vector-pointer-icon" loading="eager" alt="" src="/vector-7.svg" />
        </div>
      </div>
      <img className="subtract-icon" alt="" />
      <form className="sign-in-button-frame">
        <div className="frame-sign-in-input">
          <h1 className="sign-in1">Sign In</h1>
          <div className="sign-in-to">Sign in to your account</div>
        </div>
        <div className="primary-button-sign-in">
          <button className="white-button-google-login">
            <div className="white">
              <div className="button" />
            </div>
            <img className="google-icon-1" alt="" src="/googleicon-1@2x.png" />
            <div className="sign-in-with">Sign in with Google</div>
          </button>
          <div className="white-button-google-login1">
            <div className="white1">
              <div className="button1" />
            </div>
            <img className="apple-1-icon" alt="" src="/apple-1@2x.png" />
            <input className="sign-in-with1" placeholder="Sign in with Apple" type="text" />
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="card1" />
          </div>
          <div className="email-address-input">
            <div className="email-address">Email address</div>
            <div className="forgot-password-label">
              <div className="input-field">
                <div className="input-field1" />
              </div>
              <input className="johndoegmailcom" placeholder="johndoe@gmail.com" type="text" />
            </div>
          </div>
          <div className="frame-with-logos-and-inputs">
            <div className="password">Password</div>
            <div className="frame-with-password-input">
              <div className="input" />
              <input className="input1" placeholder="••••••••" type="text" />
              <div className="sign-in-button" />
            </div>
          </div>
          <div className="register-button">
            <div className="forgot-password">Forgot password?</div>
          </div>
          <button className="forgotpasswordbutton">
            <div className="button-primary">
              <div className="button-primary1" onClick={()=>{
                  navigate("./upload");
                }} />
            </div>
            <b className="sign-in2">Sign In</b>
          </button>
        </div>
        <div className="signuplink">
          <div className="dont-have-an-container">
            <span className="dont-have-an">{`Don’t have an account? `}</span>
            <span className="register-here">Register here</span>
          </div>
        </div>
      </form>
      <h1 className="base">BASE</h1>
    </div>);
};

export default SignIn;
