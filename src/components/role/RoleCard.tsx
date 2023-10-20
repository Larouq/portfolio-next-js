import { Pill } from "../pill";
import { Experience } from "@/types/types";

import styles from "./roleCard.module.scss";

type RoleCardProps = {
  experience: Experience;
};

export const RoleCard: React.FC<RoleCardProps> = ({ experience }) => {
  const { title, description, date, skills } = experience;

  return (
    <section className={styles.role_container}>
      <span className={styles.role_date}>{date}</span>
      <section>
        <h3>{title}</h3>
        <p className={styles.role_description}>{description}</p>
        <div className={styles.role_pills}>
          <Pill text="Javascript" color="red" />
          <Pill text="Javascript" color="red" />
          {skills.map((skill, i) => (
            <Pill text={skill.name} color={skill.color} key={i} />
          ))}
        </div>
      </section>
    </section>
  );
};
