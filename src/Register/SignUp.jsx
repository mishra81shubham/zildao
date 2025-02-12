import React from "react";
import LoginTopSection from "./LoginTopSection";
import LoginContactSection from "./LoginContactSection";
import LoginFooter from "./LoginFooter";
import SignupForm from "./SignupForm";

const Signup = () => {
  return (
    <>
      <LoginTopSection 
      topTitle='Register'
      navFromName='Home'
      navToName='Register'
      navigationTo='/signup'
      />
      {/* -------------------------------------------------------------------------------- */}
      <SignupForm />
      {/* -------------------------------------------------------------------------------- */}
      <LoginContactSection />
      {/* ----------------------------------------------------------------- */}
      <LoginFooter />
    </>
  );
};

export default Signup;
