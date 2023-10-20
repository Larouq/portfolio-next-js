import classNames from "classnames";
import styles from "./pill.module.scss";

type PillProps = {
  text: string;
  color: string;
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
