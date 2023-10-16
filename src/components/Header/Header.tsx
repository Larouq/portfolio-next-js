import { useColors } from '@/contexts/colorsContext';
import { colors as colorlist } from '@/utils/colors';
import { generateRandomColors } from '@/utils/randomGeneration';

import styles from './header.module.scss'

interface HeaderProps {
  title?: string;
}

export const Header: React.FC<HeaderProps> = ({title = "Tailor"}) => {
  const { onChangeColors, colors } = useColors()

  const onClick = () => onChangeColors(generateRandomColors(colorlist));
  console.log('colors', colors)

  return (
      <div className={styles.Header}>
      <b className={styles.Header_title}>{title}</b>
      <button className={styles.Header_button} onClick={onClick}>
        click
      </button>
    </div>
  )
}
