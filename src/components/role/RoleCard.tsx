import styles from "./roleCard.module.scss";

export const RoleCard: React.FC = () => {
  return (
    <div className={styles.role_container}>
      <div>
        <span className={styles.role_date}>2022 -- PRESENT</span>
      </div>
      <div>
        <h3>Front end developer • Tailor Nft </h3>
        <p className={styles.role_description}>
          Developed and styled interactive web apps for Apple Music, including
          the UI of Apple Music’s embeddable web player widget for in-browser
          user authorization and full song playback.
        </p>
      </div>
    </div>
  );
};
