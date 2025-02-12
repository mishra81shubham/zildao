import React from 'react';
import { Link } from "react-router-dom";
import c_shape1 from "../Assets/Images/c_shape1.png";
import f_shape1 from "../Assets/Images/f_shape1.png";
import f_shape2 from "../Assets/Images/f_shape2.png";
import f_shape3 from "../Assets/Images/f_shape3.png";
const LoginContactSection = () => {
  return (
    <>
          <section className="ico-contact pos-rel">
        <div className="container-fluid">
          <div className="ico-contact__wrap">
            <h2 className="title">Contact with coindox</h2>
            <form>
              <div className="row">
                <div className="col-lg-6">
                  <input name="name" type="text" placeholder="Enter Name" />
                  <p className="form_error" />
                </div>
                <div className="col-lg-6">
                  <input type="email" name="email" placeholder="Enter Mail" />
                  <p className="form_error" />
                </div>
                <div className="col-lg-12">
                  <textarea
                    name="message"
                    id="message"
                    cols={30}
                    rows={10}
                    placeholder="Enter your message..."
                    defaultValue={""}
                  />
                  <p className="form_error" />
                </div>
                <div className="ico-contact__btn text-center mt-10">
                  <button className="thm-btn" type="submit">
                    send message
                  </button>
                </div>
              </div>
            </form>
            <div className="ico-contact__shape-img">
              <div className="shape shape--1">
                <div data-parallax='{"y" : -50}'>
                  <img src={c_shape1} alt="" />
                </div>
              </div>
              <div className="shape shape--2">
                <div data-parallax='{"y" : 60}'>
                <img src={c_shape1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ico-contact__shape">
          <div className="shape shape--1">
            <img src={f_shape1} alt="" />
          </div>
          <div className="shape shape--2">
            <img src={f_shape2} alt="" />
          </div>
          <div className="shape shape--3">
            <img src={f_shape3} alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default LoginContactSection;