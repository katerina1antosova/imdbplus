import styles from "../styles/Navigation.module.scss"
import Image from "next/image"

const Navigation = ({ locale, locales }) => {
  const resolveDestinations = {
    en: 'Destinations',
    cs: 'Destinace',
  }
  const resolveAccomodations = {
    en: 'Accomodations',
    cs: 'Ubytování',
  }
  const resolveTransportations = {
    en: 'Transportations',
    cs: 'Doprava',
  }
  const resolveActivities = {
    en: 'Activities',
    cs: 'Aktivity',
  }
  
  let homeurl = "/";
  if (locale != 'default') {
    homeurl = "/" + locale;
  }

  const defaultLocale = locale === 'en' ? '/' : `/${locale}/`
  return (
    <header className={styles.navigationwrapper}>
      <nav className={styles.navigation} role="navigation">

        <div className={styles.navlogo}>
          <a href={homeurl}>
            <img
              src="https://a.storyblok.com/f/138693/500x500/c2c7c96e7d/packandgo_logo.jpeg"
              alt="Pack and go logo"
              className=""
            />
            <Image src="/packandgo_logo.jpeg" alt="Pack and go logo" width="0" height="0" />
          </a>
        </div>
        <div className={styles.navlinkswrapper}>
          <div className={styles.navlinks}>
            
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/destinations`} className={styles.movie}>{resolveDestinations[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/accomodations`} className={styles.movie}>{resolveAccomodations[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/transportations`} className={styles.movie}>{resolveTransportations[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/activities`} className={styles.movie}>{resolveActivities[locale]}</a>
            </div>
            
          </div>
          <div className={styles.navlocales}>
            {
              locales.map(loc => {
                return (<div className={styles.navlocale} key={loc}>
                  <a href={`/${loc}`} className={`${locale === loc ? "selected" : ""}`}>{loc}</a>
                </div>)
              })
            }
          </div>
        </div>

      </nav>
    </header>
  )
}

export default Navigation
