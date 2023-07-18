import React from 'react'
import styles from './Feature.module.css'

const Feature = ({ imgSrc, imgAlt, title, description }) => (
  <div className={styles.featureItem}>
    <img src={imgSrc} alt={imgAlt} className={styles.featureIcon} />
    <h3 className={styles.featureItemTitle}>{title}</h3>
    <p>{description}</p>
  </div>
)

export default Feature
