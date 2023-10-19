import { myResume } from "@/utils/experiences";
import styles from "./home.module.scss";
import { Fragment } from "react";

export default function Home() {
  const { name, work, experiences } = myResume;

  return (
    <div className={styles.profile_container}>
      <section className={styles.profile_section}>
        <div className={styles.me_container}>
          <h1>{name}</h1>
          <h4 className={styles.subtitle}>{work}</h4>
        </div>
      </section>
      <section className={styles.profile_section}>
        {experiences.map((item, i) => (
          <Fragment key={i}>
            <p className={styles.my_experience} key={i}>
              {item}
            </p>
            <br />
          </Fragment>
        ))}
      </section>
    </div>
  );
}
