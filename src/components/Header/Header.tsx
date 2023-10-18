import { useModal } from "@/contexts/modalContext";
import { ShareNetwork } from "phosphor-react";

import { Button, ButtonVariant } from "../button";
import { ProfilePicture } from "../profile-picture/ProfilePicture";
import { SocialLinksModal } from "../social-links-modal/SocialLinksModal";

import styles from "./header.module.scss";

interface HeaderProps {
  title?: string;
}

export const Header: React.FC<HeaderProps> = () => {
  const { openModal } = useModal();

  const onOpenModal = () =>
    openModal({ title: "Links", contentElement: <SocialLinksModal /> });

  return (
    <div className={styles.Header}>
      <ProfilePicture />
      <Button
        variant={ButtonVariant.Secondary}
        onClick={onOpenModal}
        text="Links"
        icon={<ShareNetwork size={24} weight="bold" />}
      />
    </div>
  );
};
