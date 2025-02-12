import React from 'react';
import { Link } from "react-router-dom";
import google from "../Assets/Images/google.png";
import facebookImage from "../Assets/Images/facebook.png";

const SignupForm = () => {
  return (
    <>
    <section className="eg-login__area pt-140 pb-140 p-relative z-index-1 fix">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="eg-login__wrapper">
                <div className="eg-login__top text-center mb-30">
                  <h3 className="eg-login__title">Sing Up coindox.</h3>
                  <p>
                  Already have an account?{" "}
                    <span>
                      <Link to="/login">Sing In</Link>
                    </span>
                  </p>
                </div>
                <div className="eg-login__option">
                  <form>
                    <div className="eg-login__input-wrapper">
                    <div className="eg-login__input-box">
                        <div className="eg-login__input">
                          <label htmlFor="name">Your Name</label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Nathaniel Lewis"
                          />
                          <p className="form_error" />
                        </div>
                      </div>
                      <div className="eg-login__input-box">
                        <div className="eg-login__input">
                          <label htmlFor="email">Your Email</label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="coindox@mail.com"
                          />
                          <p className="form_error" />
                        </div>
                      </div>
                      <div className="eg-login__input-box">
                        <div className="eg-login__input">
                          <label htmlFor="eg-password__input">Password</label>
                          <div className="eg-password-show">
                            <input
                              id="eg-password__input"
                              name="password"
                              type="password"
                              placeholder="Min. 6 characters"
                            />
                            <div
                              className="eg-login__input-eye"
                              id="eg-password__show-toggle"
                            >
                              <span
                                id="eg-password__hide"
                                className="open-close"
                              >
                                <svg
                                  width={18}
                                  height={14}
                                  viewBox="0 0 18 14"
                                  fill="#b3b3b3"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M1 6.77778C1 6.77778 3.90909 1 9 1C14.0909 1 17 6.77778 17 6.77778C17 6.77778 14.0909 12.5556 9 12.5556C3.90909 12.5556 1 6.77778 1 6.77778Z"
                                    stroke="currentColor"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M9.00018 8.94466C10.2052 8.94466 11.182 7.97461 11.182 6.77799C11.182 5.58138 10.2052 4.61133 9.00018 4.61133C7.79519 4.61133 6.81836 5.58138 6.81836 6.77799C6.81836 7.97461 7.79519 8.94466 9.00018 8.94466Z"
                                    stroke="currentColor"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>{" "}
                              </span>
                            </div>
                          </div>
                          <p className="form_error" />
                        </div>
                      </div>
                    </div>
                    <div className="eg-login__suggetions d-flex align-items-center justify-content-between mb-20">
                      <div className="eg-login__remeber">
                        <input id="remeber" type="checkbox" />
                        <label htmlFor="remeber">Remember me</label>
                      </div>
                      <div className="eg-login__forgot">
                        <a href="/forgot">Forgot Password?</a>
                      </div>
                    </div>
                    <div className="eg-login__bottom">
                      <button type="submit" className="thm-btn w-100">
                      Register
                      </button>
                    </div>
                  </form>
                  <div className="eg-login__mail text-center mt-20 mb-20">
                    <p>or</p>
                  </div>
                  <div className="eg-login__social mb-10 ">
                    <div className="eg-login__option-item">
                      <a href="/login">
                        <img src={google} alt="" /> Sign in with google{" "}
                      </a>
                    </div>
                    <div className="eg-login__option-item">
                      <a href="/login">
                        {" "}
                        <img src={facebookImage} alt="" /> Sign in with facebook{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SignupForm