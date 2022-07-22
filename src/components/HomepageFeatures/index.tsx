import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
  href: string;
  linkTitle: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "tauOS Quickstart",
    Svg: require("@site/static/img/quickstart.svg").default,
    description: (
      <>
        A collection of short guides for tauOS, similar to a FAQ or How To.
      </>
    ),
    linkTitle: "Read",
    href: "/docs/quickstart",
  },
  {
    title: "tauOS User Guide",
    Svg: require("@site/static/img/user_guide.svg").default,
    description: (
      <>
        A collection of short guides for tauOS, similar to a FAQ or How To.
      </>
    ),
    linkTitle: "Read",
    href: "/docs/guide",
  },
];

function Feature({ title, Svg, description, href, linkTitle }: FeatureItem) {
  return (
    <div className={clsx("column col col--4 link")}>
      <a href={href} className={styles.link}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
          <p className={styles.more}>{linkTitle}</p>
        </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
