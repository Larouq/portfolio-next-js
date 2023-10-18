import { ReactNode, useEffect, useMemo, useState } from "react";
import { useColors } from "@/contexts/colorsContext";
import { getRandomNumber } from "@/utils/randomGeneration";

import styles from "./glowingDots.module.scss";

const DOT_NUMBER = 80;
const DOTS = [...new Array(DOT_NUMBER)];

interface GlowingDotsProps {
  children: ReactNode;
}
interface DotStyle {
  animationDelay: string;
  animationDuration: string;
  left: string;
  width: number;
  opacity: string;
  backgroundColor: string;
  boxShadow: string;
}

export const GlowingDots: React.FC<GlowingDotsProps> = ({ children }) => {
  const { colors } = useColors();
  const { primaryColor, secondaryColor } = colors;

  const selectedColor = useMemo(() => {
    return [primaryColor, secondaryColor];
  }, [primaryColor, secondaryColor]);

  const [clientSideStyles, setClientSideStyles] = useState<DotStyle[]>([]);

  useEffect(() => {
    const dotStyles = DOTS.map((_) => ({
      animationDelay: `${getRandomNumber(1, 2)}s`,
      animationDuration: `${getRandomNumber(7, 12)}s`,
      left: `${getRandomNumber(0, 100)}%`,
      width: getRandomNumber(3, 15),
      opacity: `${getRandomNumber(20, 30)}%`,
      backgroundColor: selectedColor[getRandomNumber(0, 1)],
      boxShadow: `0 0 12px ${selectedColor[getRandomNumber(0, 1)]}`,
    }));
    setClientSideStyles(dotStyles);
  }, [selectedColor]);

  return (
    <>
      <div className={styles.glowing_dot_container}>
        {DOTS.map((_, i) => (
          <div
            key={i}
            className={styles.glowing_dot}
            style={clientSideStyles[i]}
          />
        ))}
      </div>
      {children}
    </>
  );
};
