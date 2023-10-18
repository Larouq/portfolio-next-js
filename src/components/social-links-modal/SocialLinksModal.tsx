import { LinkedinLogo, GithubLogo } from "phosphor-react";
import { SocialLinks } from "@/types/types";

import styles from "./socialLinksModal.module.scss";

const socialLinks: SocialLinks = [
  {
    id: "linkedin",
    label: "See my profile linkedin",
    icon: <LinkedinLogo size={32} weight="fill" color="var(--error)" />,
    link: "https://www.linkedin.com/in/benoit-rouqui%C3%A9-862b03ba/",
  },
  {
    id: "github",
    label: "See my profile github",
    icon: <GithubLogo size={32} weight="fill" color="var(--error)" />,
    link: "https://github.com/Larouq",
  },
];

export const SocialLinksModal = () => {
  return (
    <div className={styles.links_container}>
      {socialLinks.map(({ icon, label, link }, i) => (
        <div key={i}>
          <a
            href={link}
            rel="noreferrer"
            target="_blank"
            className={styles.link_container}
          >
            {icon}
            <p className={styles.link}>{label}</p>
          </a>
        </div>
      ))}
    </div>
  );
};
