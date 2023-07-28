import React from 'react'
import PropTypes from 'prop-types'
import styles from './Hero.module.css'

/**
 * A hero component that displays a primary title, a list of subtitles,
 * and a main text. Typically used as a prominent part of a web page
 * to present key information or calls to action.
 *
 * @component
 * @param {string} title - The primary title displayed in the hero section.
 * @param {string[]} subtitles - A list of subtitles displayed in the hero section.
 * @param {string} text - The main text or description displayed in the hero section.
 *
 * @returns {React.ReactNode} The rendered hero section with title, subtitles, and main text.
 */

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
