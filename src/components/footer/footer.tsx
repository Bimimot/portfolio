import styles from './footer.module.scss';

export const Footer = () => {

    return (
        <footer className={styles.footer} id="contacts">
            <a href="mailto:mail@test.com" className={styles.mail}>
                mail@test.com
            </a>
            GIT LnkedIn
        </footer>
    )
}