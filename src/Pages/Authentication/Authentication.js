import "./Authentication.css";
import {useHistory} from 'react-router-dom';
import { useState } from "react";
import { UdunkuluModalLogo } from "../../Assets/Images";
import { Button } from "../../Components";
import {
  registerDetailsToServer,
  sendDetailsToServer,
} from "../../Api/Authentication";
import { LogOutButton } from "../../Components/Buttons/LogOut";
import { Times } from "../../Assets/Icons";

const Authentication = (props) => {
  const history = useHistory();
  const [state, setState] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    stageName: "",
    phoneNumber: "",
    confirmPassword: "",
    passwordError: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // function for input fiels to listen for change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  // function for signing up
  const handleSubmit = async (e, role) => {
    e.preventDefault();
    console.log(state);
    if (state.password === state.confirmPassword && role === "artist") {
      try {
        setIsLoading(true);

        const response = await registerDetailsToServer(
          state.email,
          state.lastName,
          state.password,
          state.firstName,
          state.stageName,
          role
        );
        if (response.data.data) {
          localStorage.setItem("token", response.data.data.token);
           //set user id in storage to be use in th upload
           localStorage.setItem("userId", response.data.data.artist._id);
        }
        window.location = "/dashboard";
        console.log("Signup response:", response);
      } catch (error) {
        setError(error.response.data.message);
        const timer = setTimeout(() => {
          setError(false);
        }, 3000);
        return()=>clearTimeout(timer);
        // console.log(error);
      }  finally {
        setIsLoading(false);
      }
    } else {
      setState((prevState) => ({
        ...prevState,
        passwordError: true,
       })); 
    }
    if (state.password === state.confirmPassword && role === "listener") {
      try {
        setIsLoading(true);
        const response = await registerDetailsToServer(
          state.email,
          state.lastName,
          state.password,
          state.firstName,
          state.phoneNumber,
          role
        );
        if (response.data.data) {
          localStorage.setItem("token", response.data.data.token);
        }
        window.location = "/top-artist";
        console.log("Signup response:", response);
      } catch (error) {
        setError(error.response.data.message);
        const timer = setTimeout(() => {
          setError(false);
        }, 3000);
        return()=>clearTimeout(timer);
        //  console.log(error);
      } finally {
        setIsLoading(false);
      }
    } else {
      setState((prevState) => ({
        ...prevState,
        passwordError: true,
       })); 
     
    }
  };

  // function for user login
  const handleLogin = async (e, role) => {
    e.preventDefault();
    console.log("you are signed in");
    if (role === "artist") {
      try {
        setIsLoading(true);
        const response = await sendDetailsToServer(state.email, state.password);
        if (response.data.data) {
          console.log(response.data.data);
          localStorage.setItem("token", response.data.data.token);
          //set user id to be use in th upload
          localStorage.setItem("artistId", response.data.data.artist._id);
          localStorage.setItem("userId", response.data.data.user._id);
        }
        alert("You have Successfully Logged In");
        window.location = "/dashboard";
        console.log("Login response:", response);
      } catch (error) {
        setError(error.response.data.message);
        console.log(error.response.data.message);
        const timer = setTimeout(() => {
          setError(false);
        }, 3000);
        return()=>clearTimeout(timer);
        // console.log(error);
      } finally {
        setIsLoading(false);
      }
    } else if (role === "listener") {
      try {
        setIsLoading(true);
        const response = await sendDetailsToServer(state.email, state.password);
        if (response.data.data) {
          localStorage.setItem("token",response.data.data.token);
        }
        alert("You have Successfully Logged In");
        window.location = "/top-artists";
        console.log("Login response:", response);
      } catch (error) {
        setError(error.response.data.message);
        console.log(error.response.data.message);
        const timer = setTimeout(() => {
          setError(false);
        }, 3000);
        return()=>clearTimeout(timer);
        // console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      {/* // <!-- Modal --> */}
      <div
        className="modal fade"
        id="authModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" id="modalDialog">
          <div className="modal-content" id="modalContent">
            <div className="modal-body" id="modalBodyMain">
              <img src={UdunkuluModalLogo} alt="" />
              <text id="modalText">
                How do you want to use <br />
                this service?
              </text>
              <div id="modalButton">
                <Button
                  variant="artist"
                  size={"lg"}
                  data-target={"#artistLoginModal"}
                  data-toggle="modal"
                  data-dismiss="modal"
                >
                  Artist
                </Button>
                <Button
                  variant="listener"
                  size={"lg"}
                  data-target={"#listenerLoginModal"}
                  data-toggle="modal"
                  data-dismiss="modal"
                >
                  Listener
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ARTISTS!!!!! */}

      {/* modal for Artist Login..... */}
      <div
        className="modal fade"
        id="artistLoginModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="ModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" id="userModalDialog">
          <div className="modal-content" id="userModalContent">
            <div id="close-button">
              <button
                type="button"
                className="close"
                data-target={"#authModal"}
                data-toggle="modal"
                data-dismiss="modal"
                id="close"
              >
                <span aria-hidden="true">
                  <img src={Times} alt="" />{" "}
                </span>
              </button>
            </div>
            {/* modal body */}
            <div className="modal-body" id="userModalBodyMain">
              <div id="modalLogo">
                <img src={UdunkuluModalLogo} alt="" />
                <text id="userModalText">You are signing in as an artist</text>
              </div>

              <form id="form" onSubmit={(e) => handleLogin(e, "artist")}>
                <div className="form-group" id="formGroup">
                  <input
                    className="form-control form-control-login"
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group" id="formGroup">
                  <input
                    className="form-control form-control-login"
                    type="password"
                    placeholder="Password"
                    id="password"
                    name="password"
                    value={state.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                {error && <p className="loginFormError">{error}</p>}
                <Button variant="Login" size={"lg"}>
                  {isLoading ? "Please wait..." : "SIGN IN"}
                </Button>
              </form>
              {/* forgot password field */}
              <div id="forgotPassword">
                <text>
                  Forgot{" "}
                  <a
                    href="#"
                    id="recover-text"
                    data-target={"#recoverPasswordModal"}
                    data-toggle="modal"
                    data-dismiss="modal"
                  >
                    Password?
                  </a>
                </text>
                <br />
                <text>
                  Don't have an account?{" "}
                  <a
                    href="#"
                    id="sign-text"
                    data-target={"#artistSignUpModal"}
                    data-toggle="modal"
                    data-dismiss="modal"
                  >
                    Sign up here
                  </a>
                </text>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Artist Sign Up */}
      <div
        className="modal fade"
        id="artistSignUpModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="ModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" id="SignUpModalDialog">
          <div className="modal-content" id="SignUpModalContent">
            <div id="signup-close-button">
              <button
                type="button"
                className="close"
                data-target={"#authModal"}
                data-toogle="modal"
                data-dismiss="modal"
                id="close"
              >
                <span aria-hidden="true">
                  <img src={Times} alt="" />
                </span>
              </button>
            </div>
            <div id="mainModal">
              {/* modal body */}
              <div
                className="modal-body"
                id="SignUpModalBody"
                style={{
                  "max-height": "calc(100vh - 210px)",
                  "overflow-y": "auto",
                }}
              >
                <div id="modalLogo">
                  <img src={UdunkuluModalLogo} alt="" />
                  <text id="modalText">Signing Up as an Artist</text>
                </div>

                <form
                  id="signup-form"
                  onSubmit={(e) => handleSubmit(e, "artist")}
                >
                  <div className="row">
                    <div className="col-sm">
                      <div className="form-group" id="signup-formGroup">
                        <input
                          className="form-control form-control-signup"
                          type="text"
                          placeholder="First Name"
                          id="firstName"
                          name="firstName"
                          value={state.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <input
                          className="form-control form-control-signup"
                          type="email"
                          placeholder="Email"
                          id="email"
                          name="email"
                          value={state.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <input
                          className="form-control form-control-signup"
                          type="password"
                          placeholder="Password"
                          id="password"
                          name="password"
                          value={state.password}
                          onChange={handleChange}
                          pattern=".{6,}"
                          required
                          title="6 characters minimum"
                        />
                        {state.passwordError ? (
                          <p className="formPasswordError">
                            Passwords do not match!!!
                          </p>
                        ) : (
                          <p></p>
                        )}
                      </div>
                      {/* col1 ends */}
                    </div>

                    <div className="col-sm">
                      <div className="form-group ">
                        <input
                          className="form-control form-control-signup"
                          type="text"
                          placeholder="Last Name"
                          id="lastName"
                          name="lastName"
                          value={state.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* artist stagename section */}
                      <div className="form-group ">
                        <input
                          className="form-control form-control-signup"
                          type="text"
                          placeholder="Stage Name"
                          id="stageName"
                          name="stageName"
                          value={state.stageName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <input
                          className="form-control form-control-signup"
                          type="password"
                          placeholder="Confirm Password"
                          id="confirmPassword"
                          name="confirmPassword"
                          value={state.confirmPassword}
                          onChange={handleChange}
                          required
                        />

                        {state.passwordError ? (
                          <p className="formPasswordError">
                            Passwords do not match!!!
                          </p>
                        ) : (
                          <p></p>
                        )}
                      </div>
                      {/* col2 ends */}
                    </div>
                    {/* row end */}
                  </div>
                  {error && <p className="signUpFormError">{error}</p>}
                  <Button variant="Signup" size={"lg"} type="submit">
                    {isLoading ? "Please wait..." : "SIGN UP"}
                  </Button>
                </form>

                {/* have an account field */}
                <div id="haveAccount">
                  <text>
                    Already have an account?{" "}
                    <a
                      id="sign-text"
                      data-target={"#artistLoginModal"}
                      data-toggle="modal"
                      data-dismiss="modal"
                    >
                      Sign in here
                    </a>
                  </text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LISTENER!!!!! */}

      {/* Modal for Listener Login..... */}
      <div
        className="modal fade"
        id="listenerLoginModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="ModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" id="userModalDialog">
          <div className="modal-content" id="userModalContent">
            <div id="close-button">
              <button
                type="button"
                className="close "
                data-target={"#authModal"}
                data-toogle="modal"
                data-dismiss="modal"
                aria-label="Close"
                id="close"
              >
                <span aria-hidden="true">
                  <img src={Times} alt="" />
                </span>
              </button>
            </div>
            {/* modal body */}
            <div className="modal-body" id="userModalBodyMain">
              <div id="modalLogo">
                <img src={UdunkuluModalLogo} alt="" />
                <text id="userModalText">You are signing in as a listener</text>
              </div>

              <form id="form" onSubmit={(e) => handleLogin(e, "artist")}>
                <div className="form-group" id="formGroup">
                  <input
                    className="form-control form-control-login"
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group" id="formGroup">
                  <input
                    className="form-control form-control-login"
                    type="password"
                    placeholder="Password"
                    id="password"
                    name="password"
                    value={state.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                {error && <p className="loginFormError">{error}</p>}
                <Button variant="Login" size={"lg"}>
                  {isLoading ? "Please wait..." : "SIGN IN"}
                </Button>
              </form>
              {/* forgot password field */}
              <div id="forgotPassword">
                <text>
                  Forgot{" "}
                  <a
                    href="#"
                    id="recover-text"
                    data-target={"#recoverPasswordModal"}
                    data-toggle="modal"
                    data-dismiss="modal"
                  >
                    Password?
                  </a>
                </text>
                <br />
                <text>
                  Don't have an account?{" "}
                  <a
                    href="#"
                    id="sign-text"
                    data-target={"#listenerSignUpModal"}
                    data-toggle="modal"
                    data-dismiss="modal"
                  >
                    Sign up here
                  </a>
                </text>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Listener Sign Up */}
      <div
        className="modal fade"
        id="listenerSignUpModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="ModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" id="SignUpModalDialog">
          <div className="modal-content" id="SignUpModalContent">
            <div id="signup-close-button">
              <button
                type="button"
                className="close "
                data-target={"#authModal"}
                data-toggle="modal"
                data-dismiss="modal"
                aria-label="Close"
                id="close"
              >
                <span aria-hidden="true">
                  <img src={Times} alt="" />
                </span>
              </button>
            </div>
            <div id="mainModal">
              {/* modal body */}
              <div
                className="modal-body"
                id="SignUpModalBody"
                style={{
                  "max-height": "calc(100vh - 210px)",
                  "overflow-y": "auto",
                }}
              >
                <div id="modalLogo">
                  <img src={UdunkuluModalLogo} alt="" />
                  <text id="modalText">Signing Up as a Listener</text>
                </div>

                <form
                  id="signup-form"
                  onSubmit={(e) => handleSubmit(e, "listener")}
                >
                  <input
                    name="role"
                    type="hidden"
                    id="listener"
                    value={state.listener}
                  />
                  <div className="row">
                    <div className="col-sm">
                      <div className="form-group" id="signup-formGroup">
                        <input
                          className="form-control form-control-signup"
                          type="text"
                          placeholder="First Name"
                          id="firstName"
                          name="firstName"
                          value={state.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <input
                          className="form-control form-control-signup"
                          type="email"
                          placeholder="Email"
                          id="email"
                          name="email"
                          value={state.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <input
                          className="form-control form-control-signup"
                          type="password"
                          placeholder="Password"
                          id="password"
                          name="password"
                          value={state.password}
                          onChange={handleChange}
                          required
                        />

                        {state.passwordError ? (
                          <p className="formPasswordError">
                            Passwords do not match!!!
                          </p>
                        ) : (
                          <p></p>
                        )}
                      </div>
                      {/* col1 ends */}
                    </div>

                    <div className="col-sm">
                      <div className="form-group ">
                        <input
                          className="form-control form-control-signup"
                          type="text"
                          placeholder="Last Name"
                          id="lastName"
                          name="lastName"
                          value={state.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-group ">
                        <input
                          className="form-control form-control-signup"
                          type="tel"
                          placeholder="Phone Number"
                          id="phoneNumber"
                          name="phoneNumber"
                          // pattern="[0-9]{3}[0-9]{3}[0-9]{3}[0-9]{4}"
                          value={state.phoneNumber}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <input
                          className="form-control form-control-signup"
                          type="password"
                          placeholder="Confirm Password"
                          id="confirmPassword"
                          name="confirmPassword"
                          value={state.confirmPassword}
                          onChange={handleChange}
                          required
                        />
                        {state.passwordError ? (
                          <p className="formPasswordError">
                            Passwords do not match!!!
                          </p>
                        ) : (
                          <p></p>
                        )}
                      </div>
                      {/* col2 ends */}
                    </div>
                    {/* row end */}
                  </div>
                  {error && <p className="signUpFormError">{error}</p>}
                  <Button variant="Signup" size={"lg"}>
                    {isLoading ? "Please wait..." : "SIGN UP"}
                  </Button>
                </form>

                {/* have an account field */}
                <div id="haveAccount">
                  <text>
                    Already have an account?{" "}
                    <a
                      id="sign-text"
                      data-target={"#listenerLoginModal"}
                      data-toggle="modal"
                      data-dismiss="modal"
                    >
                      Sign in here
                    </a>
                  </text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RECOVER PASSWORD MODAL */}
      <div
        className="modal fade"
        id="recoverPasswordModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="ModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" id="userModalDialog">
          <div className="modal-content" id="userModalContent">
            <div id="close-button">
              <button
                type="button"
                className="close "
                data-target={"#authModal"}
                data-toggle="modal"
                data-dismiss="modal"
                aria-label="Close"
                id="close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            {/* modal body */}
            <div className="modal-body" id="userModalBodyMain">
              <div id="modalLogo">
                <img src={UdunkuluModalLogo} alt="" />
                <text id="userModalText">
                  Enter your email to recover
                  <br />
                  your password
                </text>
              </div>

              <form id="form">
                <div className="form-group" id="formGroup">
                  <input
                    className="form-control form-control-login"
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button variant="Login" size={"lg"}>
                  CONTINUE
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { Authentication };

