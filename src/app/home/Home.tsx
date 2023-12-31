import { myResume } from "@/utils/experiences";
import { Fragment } from "react";
import { ProfilePicture } from "@/components/profile-picture";
import { RoleCard } from "@/components/role";

import styles from "./home.module.scss";

export default function Home() {
  const { name, work, resumeList, experiences } = myResume;

  return (
    <section className={styles.profile_container}>
      <section className={styles.profile_section}>
        <div className={styles.me_container}>
          <h1>{name}</h1>
          <h4 className={styles.subtitle}>{work}</h4>
          <div className={styles.profile_picture}>
            <ProfilePicture />
          </div>
        </div>
      </section>
      <section className={styles.profile_section}>
        {resumeList.map((item, i) => (
          <Fragment key={i}>
            <p className={styles.my_experience} key={i}>
              {item}
            </p>
            <br />
          </Fragment>
        ))}
        <div className={styles.role_section}>
          {experiences.map((experience, i) => (
            <RoleCard experience={experience} key={i} />
          ))}
        </div>
      </section>
    </section>
  );
}
