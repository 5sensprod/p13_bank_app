import React from 'react'
import Feature from './Feature'
import featuresData from '../../data/features'
import styles from './Features.module.css'

/**
 * A component that displays a list of features. Each feature consists of an icon, title,
 * and description. The list of features is imported from a data file.
 *
 * @component
 * @returns {React.ReactNode} A rendered list of features, where each feature is presented
 * with an icon, title, and description.
 */

const Features = () => (
  <section className={styles.features}>
    <h2 className={styles.srOnly}>Features</h2>
    {featuresData.map((feature) => (
      <Feature key={feature.id} {...feature} />
    ))}
  </section>
)

export default Features
