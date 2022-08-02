import React from "react";
import styles from "./signup.module.css";
import Logo from "./logo/Logo";
import Form from "./form/Form";

const SignUp = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <Form login={false} signup={true} />
    </div>
  );
};

export default SignUp;
