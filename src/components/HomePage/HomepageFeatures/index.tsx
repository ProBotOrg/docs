import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";

type FeatureItem = {
  category: React.ReactNode;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: React.ReactNode;
  color?: string;
  redirect: string;
};

const SERVER_MANAGEMENT: FeatureItem[] = [
  {
    category: <Translate id="homepage.feature_one_category_first">Dashboard Setup</Translate>,
    Svg: require("@site/static/img/landing-page/messageIcon.svg").default,
    description: <Translate id="homepage.feature_one_description_first">
      Dashboard Your One-Stop-Shop for Server Management
      </Translate>,
    redirect: "/docs/getting-started/dashboard",
  },
  {
    category: <Translate id="homepage.feature_one_category_second">Setup ProBot</Translate>,
    Svg: require("@site/static/img/landing-page/messageIcon.svg").default,
    description: <Translate id="homepage.feature_one_description_second">
    Step by Step to invite ProBot
    </Translate>,
    redirect: "/docs/getting-started/setup",
  },
  {
    category: <Translate id="homepage.feature_one_category_third">FAQ</Translate>,
    Svg: require("@site/static/img/landing-page/messageIcon.svg").default,
    description: <Translate id="homepage.feature_one_description_third">
    Frequently Asked Questions
    </Translate>,
    redirect: "/docs/getting-started/faq",
  },
];

const UTILITIES: FeatureItem[] = [
  {
    category: <Translate id="homepage.feature_two_category_one">Modules</Translate>,
    Svg: require("@site/static/img/landing-page/messageIcon.svg").default,
    description: <Translate id="homepage.feature_two_description_first">
    Custom Welcome and Goodbye Messages for Engaging Discord Server Management
    </Translate>,
    redirect: "/docs/modules/welcome",
  },
  {
    category: <Translate id="homepage.feature_two_category_one">Modules</Translate>,
    Svg: require("@site/static/img/landing-page/messageIcon.svg").default,
    description: <Translate id="homepage.feature_two_description_second">
    Self-Assignable Roles
    </Translate>,
    redirect: "/docs/modules/self-assignable-roles",
  },
  {
    category: <Translate id="homepage.feature_two_category_one">Modules</Translate>,
    Svg: require("@site/static/img/landing-page/messageIcon.svg").default,
    description: <Translate id="homepage.feature_two_description_third">
    Easily create embeds for your server!
    </Translate>,
    redirect: "/docs/modules/embed",
  },
  {
    category: <Translate id="homepage.feature_two_category_one">Modules</Translate>,
    Svg: require("@site/static/img/landing-page/messageIcon.svg").default,
    description: <Translate id="homepage.feature_two_description_four">
    Level System
    </Translate>,
    redirect: "/docs/modules/level_system",
  },
];

function Feature({ category, Svg, description, color, redirect }: FeatureItem) {
  return (
    <div className={styles["feature"]}>
      <div className={clsx(styles["feature-svg__wrapper"], styles[color])}>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div>
        <h3 className={styles["feature__category"]}>{category}</h3>
        <p className={styles["feature__description"]}>{description}</p>
        <Link to={redirect} className={styles["feature__learn-more"]}>
          <Translate
            id="homepage.learn_more">
              Learn More
          </Translate>
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles["features-wrapper"]}>
      <div className="container">
        <h5 className="text-h5">
        <Translate
            id="homepage.category_first_section">
              Server management
          </Translate>
          </h5>
        <div className={clsx(styles.features)}>
          {SERVER_MANAGEMENT.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
      <div className="container">
        <h5 className="text-h5">
        <Translate
            id="homepage.category_second_section">
              Modules
          </Translate></h5>
        <div className={clsx(styles.features, styles.green)}>
          {UTILITIES.map((props, idx) => (
            <Feature color="green" key={idx} {...props} />
          ))}
        </div>
      </div>
      {/*<div className="container">
        <h5 className="text-h5">Utilities</h5>
        <div className={clsx(styles.features, styles.sliver)}>
          {UTILITIES.map((props, idx) => (
            <Feature color="sliver" key={idx} {...props} />
          ))}
        </div>
      </div>*/}
    </section>
  );
}
