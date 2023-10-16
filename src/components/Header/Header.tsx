import { useColors } from "@/contexts/colorsContext";
import { Button, ButtonVariant } from "../Button";
import styles from "./header.module.scss";

interface HeaderProps {
  title?: string;
}

export const Header: React.FC<HeaderProps> = ({ title = "Tailor" }) => {
  const { onChangeColors, colors } = useColors();
  console.log("colors", colors);

  return (
    <div className={styles.Header}>
      <b className={styles.Header_title}>{title}</b>
      <Button
        variant={ButtonVariant.Primary}
        onClick={onChangeColors}
        text="Click"
      />
    </div>
  );
};
