import React from 'react'
import PropTypes from 'prop-types'
import styles from './Hero.module.css'

const Hero = ({ title, subtitles, text }) => {
  return (
    <div className={styles.hero}>
      <section className={styles.heroContent}>
        <h2 className={styles.srOnly}>{title}</h2>
        {subtitles.map((subtitle, index) => (
          <p key={index} className={styles.subtitle}>
            {subtitle}
          </p>
        ))}
        <p className={styles.text}>{text}</p>
      </section>
    </div>
  )
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitles: PropTypes.arrayOf(PropTypes.string).isRequired,
  text: PropTypes.string.isRequired,
}

export default Hero
