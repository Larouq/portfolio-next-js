import Image from "next/image";
import { useColors } from "@/contexts/colorsContext";
import pfp from "../../assets/jon_snow.png";

import styles from "./profilePicture.module.scss";

export const ProfilePicture = () => {
  const { onChangeColors } = useColors();

  return (
    <div className={styles.profile_picture} onClick={onChangeColors}>
      <Image alt="pfp" src={pfp} width={160} />
    </div>
  );
};
