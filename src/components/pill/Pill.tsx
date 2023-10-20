import classNames from "classnames";
import styles from "./pill.module.scss";

type ColorPill = "red" | "blue" | "green" | "yellow";

type PillProps = {
  text: string;
  color: ColorPill;
};

export const Pill: React.FC<PillProps> = ({ text, color }) => {
  const PillClassNames = classNames(styles.pill_container, {
    [styles[color]]: color,
  });

  return (
    <div className={PillClassNames}>
      <span>{text}</span>
    </div>
  );
};
