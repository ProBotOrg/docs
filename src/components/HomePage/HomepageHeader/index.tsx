import React from "react";
import Link from "@docusaurus/Link";
import Badges from "../../Badges";
import styles from "./style.module.css";
import HeaderBackground from "@site/static/img/landing-page/header.svg";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Translate, {translate} from '@docusaurus/Translate';

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
          <h2 className="text-h2">
          <Translate
              id="homepage.header_welcome">
              Welcome to the ProBot Docs!
          </Translate>
          </h2>
          <p className="big-regular-text">
          <Translate
              id="homepage.header_welcome_description">
              ProBot is a highly configurable, multipurpose bot that offers features like image greeting, detailed logs,
              social commands, moderation, self-assignable roles, social media notifications, and protection for your server.
          </Translate>
          </p>
          <Link to="/docs/intro">
          <button className={clsx("btn", "btn-primary")}>
          <Translate
              id="homepage.header_go_to_docs">
              Go to Docs
          </Translate>
          </button>
          </Link>
        </div>
        <div className={styles["just-space"]} />
      </div>
    </header>
  );
}
