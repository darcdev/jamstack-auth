import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const index = () => (
  <Layout>
    <h1>This App Rules!</h1>
    <p>Log in to find out why</p>
    <Link to="/dashboard/">Go to thes dashboard</Link>
  </Layout>
);

export default index;
