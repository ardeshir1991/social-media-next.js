import React from "react";
import Head from "next/head";
import styles from "./layout.module.css";

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title}-Social Media` : "Social Media"}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>{children}</main>
    </>
  );
};

export default Layout;