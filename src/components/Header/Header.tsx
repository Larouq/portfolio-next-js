import { useColors } from '@/contexts/colorsContext';
import styles from './header.module.scss'

interface HeaderProps {
  title?: string;
}

export const Header: React.FC<HeaderProps> = ({title = "Tailor"}) => {
  const { onChangeColors, colors } = useColors()

  return (
      <div className={styles.Header}>
      <b className={styles.Header_title}>{title}</b>
      <button className={styles.Header_button} onClick={onChangeColors}>
        click
      </button>
    </div>
  )
}
