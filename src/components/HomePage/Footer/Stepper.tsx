import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
import React, { useState, useEffect } from "react";
import styles from "./style.module.css";

export default function Stepper() {
  const { i18n } = useDocusaurusContext();
  const SERVER_STATUS = {
    VERIFIED: require("@site/static/img/verified.svg").default,
    NORMAL: null,
  };
  const array = [
    {
      message:
        "Easily the best project management software on the market, right now. We became 2x faster and more efficient after adopting Projectile. Love the automated reports and alerts.",
      server: {
        name: "Valorant",
        image: "https://probot.media/CltyhWqx9l.jpg",
        membersCount: "388,740",
        status: "VERIFIED",
      },
    },
    {
      message:
        "Easily the best project management software on the market, right now. We became 2x faster and more efficient after adopting Projectile. Love the automated reports and alerts.",
      server: {
        name: "Minecraft",
        image: "https://probot.media/CltyhWqx9l.jpg",
        membersCount: "999,999",
        status: "VERIFIED",
      },
    },
    {
      message:
        "Easily the best project management software on the market, right now. We became 2x faster and more efficient after adopting Projectile. Love the automated reports and alerts.",
      server: {
        name: "AgarIO",
        image: "https://probot.media/CltyhWqx9l.jpg",
        membersCount: "999,999",
        status: "NORMAL",
      },
    },
  ];

  const [randomObject, setRandomObject] = useState(array[0]);

  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    let intervalId: any;
    intervalId = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
      if (seconds === 20) {
        clearInterval(intervalId);
        const randomIndex = Math.floor(Math.random() * array.length);
        setRandomObject(array[randomIndex]);
        setSeconds(0);
        intervalId = setInterval(() => {
          setSeconds((seconds) => seconds + 1);
          if (seconds === 20) {
            clearInterval(intervalId);
            const randomIndex = Math.floor(Math.random() * array.length);
            setRandomObject(array[randomIndex]);
            setSeconds(0);
          }
        }, 1000);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [array]);

  const getRandomObject = () => {
    const randomIndex = Math.floor(Math.random() * array.length);
    setRandomObject(array[randomIndex]);
    setSeconds(0);
  };

  return (
    <div
      className={clsx(
        styles["stepper-wrapper"],
        i18n.currentLocale === "ar" ? styles.rtl : null
      )}
    >
      <svg
        width="23"
        height="20"
        viewBox="0 0 23 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.4" clip-path="url(#clip0_975_3014)">
          <path
            d="M7.17023 9.47691C6.61847 9.31804 6.0667 9.23745 5.52996 9.23745C4.70111 9.23745 4.00954 9.42686 3.47326 9.6588C3.99026 7.76611 5.2322 4.50033 7.70626 4.13255C7.93539 4.09849 8.12315 3.93279 8.18565 3.70978L8.72639 1.77575C8.77199 1.61218 8.74496 1.4371 8.65166 1.29517C8.55836 1.15323 8.40844 1.05852 8.24041 1.03549C8.05781 1.01059 7.8717 0.99789 7.68723 0.99789C4.71756 0.99789 1.77659 4.09753 0.535574 8.53576C-0.19292 11.1395 -0.406543 15.0542 1.38791 17.5181C2.39204 18.8969 3.857 19.6331 5.74217 19.7067C5.74991 19.7069 5.75742 19.7072 5.76519 19.7072C8.09119 19.7072 10.1538 18.1406 10.7812 15.8981C11.156 14.5574 10.9866 13.1514 10.3037 11.9381C9.62806 10.7384 8.51537 9.86397 7.17023 9.47691Z"
            fill="#EBECF2"
          />
          <path
            d="M21.7303 11.9381C21.0547 10.7382 19.942 9.86375 18.5969 9.47669C18.0451 9.31782 17.4933 9.23723 16.9568 9.23723C16.128 9.23723 15.4361 9.42663 14.8999 9.65858C15.4169 7.76589 16.6588 4.5001 19.1331 4.13233C19.3623 4.09827 19.5498 3.93257 19.6125 3.70956L20.1533 1.77553C20.1988 1.61196 20.1718 1.43688 20.0785 1.29495C19.9855 1.15301 19.8355 1.0583 19.6673 1.03527C19.4849 1.01037 19.2988 0.997669 19.1141 0.997669C16.1444 0.997669 13.2035 4.09731 11.9622 8.53554C11.2339 11.1393 11.0203 15.054 12.815 17.5184C13.8189 18.8969 15.2841 19.6334 17.169 19.7067C17.1768 19.7069 17.1843 19.7072 17.1923 19.7072C19.5181 19.7072 21.5809 18.1407 22.2083 15.8981C22.5827 14.5574 22.413 13.1511 21.7303 11.9381Z"
            fill="#EBECF2"
          />
        </g>
        <defs>
          <clipPath id="clip0_975_3014">
            <rect
              width="22.403"
              height="19"
              fill="white"
              transform="translate(22.403 19.8528) rotate(-180)"
            />
          </clipPath>
        </defs>
      </svg>

      <p className={styles["message"]}>{randomObject.message}</p>
      <div className={styles["server-info"]}>
        <img
          src={randomObject.server.image}
          alt={randomObject.server.name}
          width={53}
          height={53}
        />
        <div className={styles["server-info__name-members"]}>
          <div className={styles["server-info__name"]}>
            <h3>{randomObject.server.name}</h3>
            {SERVER_STATUS[randomObject.server.status] &&
              React.createElement(SERVER_STATUS[randomObject.server.status])}
          </div>
          <p>{randomObject.server.membersCount} Members</p>
        </div>
      </div>
      <div className={styles["progress-ring"]} onClick={getRandomObject}>
        <svg
          width="9"
          height="17"
          viewBox="0 0 9 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles["arrow-icon"]}
        >
          <path
            d="M1 1.85278L7.65 8.50278L1 15.1528"
            stroke="#EBECF2"
            stroke-width="1.8"
            stroke-linecap="round"
          />
        </svg>
        <svg width="50" height="50">
          <circle r="23" cx="25" fill="#8685FF" cy="25" />
          <circle
            style={{ strokeLinecap: "round" }}
            className="progress-ring__circle"
            stroke="#ebecf250"
            strokeWidth="1.8"
            fill="transparent"
            r="22"
            cx="25"
            cy="25"
            strokeDasharray={`${(seconds / 20) * 145} ${145}`}
          />
        </svg>
      </div>
    </div>
  );
}
