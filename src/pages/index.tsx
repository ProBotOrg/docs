import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomePage/HomepageFeatures";
import HomepageHeader from "../components/HomePage/HomepageHeader";
import GoIntroduction from "../components/HomePage/GoIntroduction";
import HomePageFooter from "../components/HomePage/Footer";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
      wrapperClassName="pb-layout"
      noFooter
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <GoIntroduction />
      </main>
      <HomePageFooter />
    </Layout>
  );
}
