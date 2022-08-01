import React from "react";
import Profile from "../../components/profile/profile";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Blur from "../../components/blurParts/Blur";

const UserProfile = () => {
  const { query } = useRouter();
  const { id } = query;
  return (
    <Layout title="Profile">
      <Blur />
      <Profile />
    </Layout>
  );
};

export default UserProfile;
