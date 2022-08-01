import Blur from "../components/blurParts/Blur";
import Layout from "../components/Layout";
import Content from "../components/home/Content";

export default function Home() {
  return (
    <Layout title="Home">
      <Blur />
      <Content />
    </Layout>
  );
}
