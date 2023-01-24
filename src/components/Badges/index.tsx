import React from "react";
import IProps from "./type";
import styles from "./style.module.css";

export default function Badges(props: IProps) {
  const { label } = props;

  return (
    <div className={styles.container}>
      <span className={styles.text}>{label}</span>
    </div>
  );
}
