import styles from './FooterStyles.module.css'

function Footer() {
  return (
    <section id='footer' className={styles.cotainer}>
        <p>	&copy; 2024 John Kyle Rigor. <br/>
            All rights reserve
        </p>
    </section>
  )
}

export default Footer