import { ReactNode } from "react";
import { useColors } from "@/contexts/colorsContext";
import { getRandomNumber } from "@/utils/randomGeneration";

import styles from "./glowingDots.module.scss";

const DOT_NUMBER = getRandomNumber(50, 80);
const DOTS = [...new Array(DOT_NUMBER)];

interface GlowingDotsProps {
  children: ReactNode;
}

export const GlowingDots: React.FC<GlowingDotsProps> = ({ children }) => {
  const { colors } = useColors();
  const { primaryColor, secondaryColor } = colors;
  const selectedColor = [primaryColor, secondaryColor];

  return (
    <div className={styles.glowing_dot_container}>
      {DOTS.map((_, i) => (
        <div
          key={i}
          className={styles.glowing_dot}
          style={{
            animationDelay: `${getRandomNumber(0, 1)}s`,
            animationDuration: `${getRandomNumber(7, 12)}s`,
            left: `${getRandomNumber(0, 100)}%`,
            width: getRandomNumber(3, 15),
            opacity: `${getRandomNumber(20, 30)}%`,
            backgroundColor: selectedColor[getRandomNumber(0, 1)],
            boxShadow: `0 0 12px ${selectedColor[getRandomNumber(0, 1)]}`,
          }}
        />
      ))}
      {children}
    </div>
  );
};
