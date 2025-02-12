import React from "react";
import LoginTopSection from "./LoginTopSection";
import LoginContactSection from "./LoginContactSection";
import LoginFooter from "./LoginFooter";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <>
      <LoginTopSection 
      topTitle='Login'
      navFromName='Home'
      navToName='Login'
      navigationTo='/login'
      />
      {/* -------------------------------------------------------------------------------- */}
      <LoginForm />
      {/* -------------------------------------------------------------------------------- */}
      <LoginContactSection />
      {/* ----------------------------------------------------------------- */}
      <LoginFooter />
    </>
  );
};

export default Login;
