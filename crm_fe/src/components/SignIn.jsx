import { useState } from "react";
import { NavLink } from "react-router-dom";


const SignIn = () => {
  const [usernameSValue, setUsernameSValue] = useState("");
  const [checkInputUsernameS, setCheckInputUsernameS] = useState(false);
  const [pswSValue, setPswSValue] = useState("");
  const [checkInputPswS, setCheckInputPswS] = useState(false);

  //USERNAME
  const usernameSChangeHandler = (event) => {
    setUsernameSValue(event.target.value);
    if (event.target.value.length >= 3) {
      setCheckInputUsernameS(true);
    } else setCheckInputUsernameS(false);
  };

  //PASSWORD
  const pswSChangeHandler = (event) => {
    setPswSValue(event.target.value);
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (event.target.value.length >= 8 && emailRegex.test(event.target.value)) {
      setCheckInputPswS(true);
    } else setCheckInputPswS(false);
  };

  const submitSHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container">
      <div className="row justify-content-around">
        <form className="col-12 col-lg-6 ">

            <div className="form-group container ">
                <div className="row justify-content-center">
                <img src="src\images\OminoBlu.jpg" className="col-4" alt="user"/>
                </div>
            </div>

          <div className="form-group row">
            <label htmlFor="userName" className="col-2 col-form-label">
              Username
            </label>
            <div className="col-10">
              <input
                className={`${
                  checkInputUsernameS == true
                    ? "border border-success "
                    : "border border-danger "
                }
              form-control`}
                onChange={usernameSChangeHandler}
                value={usernameSValue}
                type="text"
                id="usernameLogin"
                placeholder="Username"
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="psw" className="col-2 col-form-label">
              Password
            </label>
            <div className="col-10">
              <input
                className={`${
                  checkInputPswS == true
                    ? "border border-success "
                    : "border border-danger "
                }
              form-control`}
                onChange={pswSChangeHandler}
                value={pswSValue}
                type="password"
                id="psw"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="form-group row">
            <div className="col-10 ">
                <NavLink className = "password" to = "/forgotpassword">
                <span>Forgot your password?</span>
                </NavLink>
            </div>
          </div>

          <div className="col-10 buttons">
            <button onClick={submitSHandler} className="btn btn-info mt-4">
              Sign In
            </button>
          </div>
        </form>
        <div className="form-group row">{/*Quì dentro metto il final*/}</div>
      </div>
    </div>
  );
 
};

export { SignIn };
