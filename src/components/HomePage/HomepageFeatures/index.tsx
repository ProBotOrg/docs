import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  category: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: string;
  color?: string;
};

const SERVER_MANAGEMENT: FeatureItem[] = [
  {
    category: "Embed Messages",
    Svg: require("@site/static/img/landing-page/messageIcon.svg").default,
    description: "Easily create embeds for your server!",
  },
  {
    category: "Embed Messages",
    Svg: require("@site/static/img/landing-page/messageIcon.svg").default,
    description: "Easily create embeds for your server!",
  },
  {
    category: "Embed Messages",
    Svg: require("@site/static/img/landing-page/messageIcon.svg").default,
    description: "Easily create embeds for your server!",
  },
  {
    category: "Embed Messages",
    Svg: require("@site/static/img/landing-page/messageIcon.svg").default,
    description: "Easily create embeds for your server!",
  },
];

const UTILITIES: FeatureItem[] = [
  {
    category: "Embed Messages",
    Svg: require("@site/static/img/landing-page/messageIcon.svg").default,
    description: "Easily create embeds for your server!",
  },
  {
    category: "Embed Messages",
    Svg: require("@site/static/img/landing-page/messageIcon.svg").default,
    description: "Easily create embeds for your server!",
  },
  {
    category: "Embed Messages",
    Svg: require("@site/static/img/landing-page/messageIcon.svg").default,
    description: "Easily create embeds for your server!",
  },
];

function Feature({ category, Svg, description, color }: FeatureItem) {
  return (
    <div className={styles["feature"]}>
      <div className={clsx(styles["feature-svg__wrapper"], styles[color])}>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div>
        <h3 className={styles["feature__category"]}>{category}</h3>
        <p className={styles["feature__description"]}>{description}</p>
        <a href="#" className={styles["feature__learn-more"]}>
          Learn More
        </a>
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
