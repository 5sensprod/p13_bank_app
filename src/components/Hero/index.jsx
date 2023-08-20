import React from 'react'
import styles from './Hero.module.css'
import SRTitle from '../SRTitle'
import heroData from '../../data/heroData'
import ListRenderer from '../helpers/ListRenderer'

/**
 * Un composant "Hero" qui affiche un titre principal, une liste de sous-titres,
 * et un texte principal. Typiquement utilisé comme une partie proéminente d'une page web
 * pour présenter des informations clés. Les données pour ce composant
 * sont directement récupérées du fichier 'heroData'.
 *
 * @component
 * @returns {React.ReactNode} La section héros rendue avec le titre, les sous-titres et le texte principal.
 */

const Subtitle = ({ text }) => <p className={styles.subtitle}>{text}</p>

const Hero = () => {
  const data = heroData[0]

  return (
    <div className={styles.hero}>
      <section className={styles.heroContent}>
        <SRTitle text={data.title} />
        <ListRenderer
          data={data.subtitles}
          Component={Subtitle}
          propName="text"
        />
        <br />
        <p className={styles.text}>{data.text}</p>
      </section>
    </div>
  )
}

export default Hero
