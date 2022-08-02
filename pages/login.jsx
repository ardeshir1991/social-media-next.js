import React from "react";
import Login from "../components/auth/Login";
import Blur from "../components/blurParts/Blur";
import Layout from "../components/Layout";

const login = () => {
  return (
    <Layout>
      <Blur />
      <Login />
    </Layout>
  );
};

export default login;
