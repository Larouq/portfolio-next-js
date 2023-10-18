import { useModal } from "@/contexts/modalContext";
import { ShareNetwork } from "phosphor-react";

import { Button, ButtonVariant } from "../button";
import { ProfilePicture } from "../profile-picture/ProfilePicture";
import { SocialLinksModal } from "../social-links-modal/SocialLinksModal";

import styles from "./header.module.scss";
import Link from "next/link";

interface HeaderProps {
  title?: string;
}

export const Header: React.FC<HeaderProps> = () => {
  const { openModal } = useModal();

  const onOpenModal = () => {
    console.log("toto");
    openModal({ title: "Links", contentElement: <SocialLinksModal /> });
  };

  return (
    <div className={styles.Header}>
      <ProfilePicture />
      <Link href={"/about"}>
        <p>About me</p>
      </Link>
      <Button
        variant={ButtonVariant.Secondary}
        onClick={onOpenModal}
        text="Links"
        icon={<ShareNetwork size={24} weight="bold" />}
      />
    </div>
  );
};
