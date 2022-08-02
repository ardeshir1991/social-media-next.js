import React from "react";
import Form from "./form/Form";
import styles from "./login.module.css";
import Logo from "./logo/Logo";

const Login = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <Form login={true} signup={false} />
    </div>
  );
};

export default Login;
