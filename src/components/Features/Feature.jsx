import React from 'react'
import PropTypes from 'prop-types'
import styles from './Feature.module.css'

const Feature = ({ imgSrc, imgAlt, title, description }) => (
  <div className={styles.featureItem}>
    <img src={imgSrc} alt={imgAlt} className={styles.featureIcon} />
    <h3 className={styles.featureItemTitle}>{title}</h3>
    <p>{description}</p>
  </div>
)

Feature.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Feature
