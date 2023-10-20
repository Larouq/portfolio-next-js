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
      <div className={styles.role_date}>{date}</div>
      <section>
        <h3>{title}</h3>
        <p className={styles.role_description}>{description}</p>
        <div className={styles.role_pills}>
          {skills.map((skill, i) => (
            <Pill text={skill.name} color={skill.color} key={i} />
          ))}
        </div>
      </section>
    </section>
  );
};
