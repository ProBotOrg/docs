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
    category: <Translate>Embed Messages</Translate>,
    Svg: require("@site/static/img/landing-page/messageIcon.svg").default,
    description: <Translate>Easily create embeds for your server!</Translate>,
    redirect: "/docs/modules/embed",
  },
  {
    category: <Translate>Embed Messages</Translate>,
    Svg: require("@site/static/img/landing-page/messageIcon.svg").default,
    description: <Translate>Easily create embeds for your server!</Translate>,
    redirect: "/docs/modules/embed",
  },
  {
    category: <Translate>Embed Messages</Translate>,
    Svg: require("@site/static/img/landing-page/messageIcon.svg").default,
    description: <Translate>Easily create embeds for your server!</Translate>,
    redirect: "/docs/modules/embed",
  },
  {
    category: <Translate>Embed Messages</Translate>,
    Svg: require("@site/static/img/landing-page/messageIcon.svg").default,
    description: <Translate>Easily create embeds for your server!</Translate>,
    redirect: "/docs/modules/embed",
  },
];

const UTILITIES: FeatureItem[] = [
  {
    category: <Translate>Embed Messages</Translate>,
    Svg: require("@site/static/img/landing-page/messageIcon.svg").default,
    description: <Translate>Easily create embeds for your server!</Translate>,
    redirect: "/docs/modules/embed",
  },
  {
    category: <Translate>Embed Messages</Translate>,
    Svg: require("@site/static/img/landing-page/messageIcon.svg").default,
    description: <Translate>Easily create embeds for your server!</Translate>,
    redirect: "/docs/modules/embed",
  },
  {
    category: <Translate>Embed Messages</Translate>,
    Svg: require("@site/static/img/landing-page/messageIcon.svg").default,
    description: <Translate>Easily create embeds for your server!</Translate>,
    redirect: "/docs/modules/embed",
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
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles["features-wrapper"]}>
      <div className="container">
        <h5 className="text-h5">Server management</h5>
        <div className={clsx(styles.features)}>
          {SERVER_MANAGEMENT.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
      <div className="container">
        <h5 className="text-h5">Utilities</h5>
        <div className={clsx(styles.features, styles.green)}>
          {UTILITIES.map((props, idx) => (
            <Feature color="green" key={idx} {...props} />
          ))}
        </div>
      </div>
      <div className="container">
        <h5 className="text-h5">Utilities</h5>
        <div className={clsx(styles.features, styles.sliver)}>
          {UTILITIES.map((props, idx) => (
            <Feature color="sliver" key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
