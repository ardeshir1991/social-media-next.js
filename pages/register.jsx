import React from "react";
import Layout from "../components/Layout";
import Blur from "../components/blurParts/Blur";
import SignUp from "../components/auth/SignUp";

const register = () => {
  return (
    <Layout>
      <Blur />
      <SignUp />
    </Layout>
  );
};

export default register;
