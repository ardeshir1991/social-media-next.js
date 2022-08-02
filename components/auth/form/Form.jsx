import React from "react";
import styles from "./form.module.css";
import Button from "../../button/Button";
import Link from "next/link";

const Form = ({ login, signup }) => {
  return (
    <div className={styles.formContainer}>
      <h2>{login ? "Login" : "Sign Up"}</h2>
      <form action="">
        {signup && (
          <div className={styles.fnameLname}>
            <input type="text" placeholder="firstname" name="firstname" />
            <input type="text" placeholder="lastname" name="lastname" />
          </div>
        )}
        <input type="text" placeholder="useername" name="username" />
        <input type="password" placeholder="password" name="password" />
        {login && (
          <>
            <p>
              If you have not registered yet, please{" "}
              <Link href="/register">
                <a>Sign Up</a>
              </Link>
            </p>
            <Button>Login</Button>
          </>
        )}
        {signup && (
          <>
            <p>
              If you have registered please{" "}
              <Link href="/login">
                <a>Login</a>
              </Link>
            </p>
            <Button>Sign Up</Button>
          </>
        )}
      </form>
    </div>
  );
};

export default Form;
