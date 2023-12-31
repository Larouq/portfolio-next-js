"use client";

import { useModal } from "@/contexts/modalContext";
import { ShareNetwork } from "phosphor-react";

import { Button } from "../button";
import { ProfilePicture } from "../profile-picture/ProfilePicture";
import { SocialLinksModal } from "../social-links-modal/SocialLinksModal";

import styles from "./header.module.scss";
import Link from "next/link";

type HeaderProps = {
  title?: string;
};

export const Header: React.FC<HeaderProps> = () => {
  const { openModal } = useModal();

  const onOpenModal = () => {
    openModal({ title: "Profiles", contentElement: <SocialLinksModal /> });
  };

  return (
    <header className={styles.Header}>
      <ProfilePicture />
      <Link href={"/todo"}>
        <p className={styles.Header_link}>SSR</p>
      </Link>
      <Button
        variant="secondary"
        onClick={onOpenModal}
        text="See profiles"
        icon={<ShareNetwork size={24} weight="bold" />}
      />
    </header>
  );
};
