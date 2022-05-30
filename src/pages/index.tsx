import * as React from "react";
import Layout from "../components/layout/Layout";

const IndexPage = () => {
  return (
    <Layout seo={{ title: "Home" }}>
      <div className="container my-6">
        <p>Welcome to the home of Spring.NET.</p>
        <p>
          Spring.NET is an open source application framework that makes building
          enterprise .NET applications easier.
        </p>
        <p>
          Providing components based on proven design patterns that can be
          integrated into all tiers of your application architecture, Spring
          helps increase development productivity and improve application
          quality and performance.
        </p>
        <p>Please read the overview for additional information.</p>
      </div>
    </Layout>
  );
};

export default IndexPage;
