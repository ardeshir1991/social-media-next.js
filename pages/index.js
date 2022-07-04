import Image from "next/image";
import Blur from "../components/blurParts/Blur";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <Blur />
    </Layout>
  );
}
