// src/components/Features/Features.jsx
import React from 'react'
import Feature from './Feature'
import featuresData from '../../data/features'
import styles from './Features.module.css'

const Features = () => (
  <section className={styles.features}>
    <h2 className={styles.srOnly}>Features</h2>
    {featuresData.map((feature, index) => (
      <Feature key={index} {...feature} />
    ))}
  </section>
)

export default Features
