import { useColors } from "@/contexts/colorsContext";
import { Button, ButtonVariant } from "../button";
import { ShareNetwork } from "phosphor-react";
import { ProfilePicture } from "../profile-picture/ProfilePicture";

import styles from "./header.module.scss";

interface HeaderProps {
  title?: string;
}

export const Header: React.FC<HeaderProps> = () => {
  const { onChangeColors, colors } = useColors();
  console.log("colors", colors);

  return (
    <div className={styles.Header}>
      <ProfilePicture />
      <Button
        variant={ButtonVariant.Secondary}
        onClick={onChangeColors}
        text="Click"
        icon={<ShareNetwork size={24} />}
      />
    </div>
  );
};
