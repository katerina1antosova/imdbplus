import styles from "../styles/Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footerwrapper}>
      <div className={styles.footer}>

        <div className="">
          <img
            src="https://a.storyblok.com/f/138693/500x500/c2c7c96e7d/packandgo_logo.jpeg"
            alt="Pack and go logo"
            className={styles.footerlogo}
          />
        </div>
        <p>Pack'NGo takes you wherever you want. Let's pack and travel together!</p>
      </div>
    </footer>



  )
}

export default Footer
