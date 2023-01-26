import Link from "@docusaurus/Link";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import Stepper from "./Stepper";
import styles from "./style.module.css";

export default function HomePageFooter() {
  return (
    <footer className={styles["wrapper"]}>
      {/* <div className="container">
        <div
          ref={firstComponentRef}
          className={clsx(styles["first-component"], "container")}
        >
          <div className={styles["text"]}>
            <h3 className={clsx("text-h3", styles["title"])}>
              Let ProBot take care of your Server
            </h3>
            <p className={styles["description"]}>
              Join over 8,000,000 server using ProBot
            </p>
            <button className="btn btn-white">
              Add to Discord
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.025 4.94191L17.0833 10.0002L12.025 15.0586"
                  stroke="#4D4BEC"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.91666 10.0002H16.9417"
                  stroke="#4D4BEC"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className={styles["stepper"]}>
            <Stepper />
          </div>
        </div>
      </div> */}
      <div className={styles["second-component"]}>
        <div
          className={clsx(styles["second-component__container"], "container")}
        >
          <div className={styles["brand"]}>
            <div className={styles["brand__name-image"]}>
              <img
                src={require("@site/static/img/logo.png").default}
                alt="ProBot brand"
                height={49.34}
              />
              <h3>ProBot</h3>
            </div>
            <p className={styles["brand__description"]}>
              A very customizable multipurpose bot for welcome image, In-depth
              logs, Social commands, Music, Moderation and many more ...
            </p>
          </div>
          <div className={styles["links"]}>
            <div>
              <h4>Docs</h4>
              <ul>
                <li>
                  <Link to="/docs/intro">Introduction</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>Community</h4>
              <ul>
                <li>
                  <Link to="https://discord.com/invite/probot">Discord</Link>
                </li>
                <li>
                  <Link to="https://twitter.com/intent/follow?screen_name=tryProBot">Twitter</Link>
                </li>
                <li>
                  <Link to="https://reddit.com/r/probot">Reddit</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>Rules</h4>
              <ul>
                <li>
                  <Link to="https://probot.io/terms-of-use">Terms & Rules</Link>
                </li>
                <li>
                  <Link to="https://probot.io/privacy-policy">Privacy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={clsx(styles["third-component"], "container")}>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
          {/* <ul>
            <li></li>
          </ul> */}
        </div>
      </div>
    </footer>
  );
}
