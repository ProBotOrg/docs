import Link from "@docusaurus/Link";
import clsx from "clsx";
import React from "react";
import style from "./style.module.css";
import Translate, {translate} from '@docusaurus/Translate';

export default function GoIntroduction() {
  return (
    <section className={clsx("container", style.container)}>
      <div style={{ flex: "1 1 393.33px" }}></div>
      <div className={style["wrapper"]}>
        <Link to="/docs/intro">
          <h3><Translate
              id="theme.docs.paginator.next">
              NEXT
          </Translate></h3>
          <div>
            <span><Translate
              id="homepage.introduction">
              Introduction
          </Translate> {">>"}</span>
          </div>
        </Link>
      </div>
    </section>
  );
}
