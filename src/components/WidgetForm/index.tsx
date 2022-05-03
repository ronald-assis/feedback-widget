import styles from './styles.module.css';
import { CloseButton } from '../CloseButton';

export function WidgetForm(){
  return(
    <div className={styles.widgetForm}>
      <header>
        <span className={styles.titleFeedck}>
          Deixe seu feedback
        </span>

      <CloseButton />
      </header>

      <p>Hello Word!</p>

      <footer className={styles.footerWidgetForm}>
        {'Feito com ♥ pela '}
        <a className={styles.siteRocket} href="https://rocketseat.com.br">
          Rocketseat
        </a>
      </footer>
    </div>
  )
}
