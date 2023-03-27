import React from "react";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomePage/HomepageFeatures";
import HomepageHeader from "../components/HomePage/HomepageHeader";
import GoIntroduction from "../components/HomePage/GoIntroduction";

export default function Home(): JSX.Element {
  return (
    <Layout
      description="Get started with ProBot and take your Discord server to new heights with our comprehensive ProBot Docs!
      Discover tips, tricks, and best practices for using this powerful bot."
      wrapperClassName="pb-layout"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <GoIntroduction />
      </main>
    </Layout>
  );
}
