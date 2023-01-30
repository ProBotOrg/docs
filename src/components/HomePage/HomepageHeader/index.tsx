import React from "react";
import Link from "@docusaurus/Link";
import Badges from "../../Badges";
import styles from "./style.module.css";
import HeaderBackground from "@site/static/img/landing-page/header.svg";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function HomepageHeader() {
  const { i18n } = useDocusaurusContext();

  return (
    <header
      className={clsx(
        styles.heroBanner,
        i18n.currentLocale === "ar" ? styles.rtl : null
      )}
    >
      <div className={styles["background-wrapper"]}>
        <HeaderBackground className={styles["background"]} />
      </div>
      <div className={clsx("container", styles.container)}>
        <div className={styles["text-info"]}>
          <Badges label="Beta" />
          <h2 className="text-h2">Welcome to the ProBot Docs!</h2>
          <p className="big-regular-text">
            A very customizable multipurpose bot for welcome image, In-depth
            logs, Social commands, Music, Moderation and many more ...
          </p>
          <Link to="/docs/intro">
          <button className={clsx("btn", "btn-primary")}>Go to Docs</button>
          </Link>
        </div>
        <div className={styles["just-space"]} />
      </div>
    </header>
  );
}
