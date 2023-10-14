import styles from '../styles/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contents}>
        <a className={styles.url} href="https://github.com/5meang9" target={'_blank'}>
          <h2 className={styles.title}>
            https://github.com/5meang9
          </h2>
        </a>
      </div>
    </footer>
  )
}

export default Footer