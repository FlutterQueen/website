import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
// TODO :: update features images
const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Queen was designed to make app development simpler, more readable and
        easier to work with.{" "}
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    description: <> Queen lets you focus on Your app more on business logic </>,
  },
  {
    title: "Powered by Flutter",
    Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        {" "}
        under the hood queen is just a collection of packages built to work
        together{" "}
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />{" "}
      </div>{" "}
      <div className="text--center padding-horiz--md">
        <h3> {title} </h3> <p> {description} </p>{" "}
      </div>{" "}
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {" "}
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
