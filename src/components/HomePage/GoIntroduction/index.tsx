import Link from "@docusaurus/Link";
import clsx from "clsx";
import React from "react";
import style from "./style.module.css";

export default function GoIntroduction() {
  return (
    <section className={clsx("container", style.container)}>
      <div style={{ flex: "1 1 393.33px" }}></div>
      <div className={style["wrapper"]}>
        <Link to="/docs/intro">
          <h3>NEXT</h3>
          <div>
            <span>Introduction {">>"}</span>
          </div>
        </Link>
      </div>
    </section>
  );
}
