"use client";

import Image from "next/image";
import { useColors } from "@/contexts/colorsContext";
import pfp from "../../assets/jon_snow.png";

import styles from "./profilePicture.module.scss";
import Link from "next/link";

export const ProfilePicture = () => {
  const { colors, onChangeColors } = useColors();

  return (
    <Link href={"/"}>
      <div
        className={styles.profile_picture}
        onClick={onChangeColors}
        style={{ border: `2px solid ${colors.primaryColor}` }}
      >
        <Image alt="pfp" src={pfp} width={160} />
      </div>
    </Link>
  );
};
