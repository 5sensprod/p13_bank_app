import React from 'react'
import Feature from './Feature'
import featuresData from '../../data/featuresData'
import styles from './Features.module.css'
import ListRenderer from '../helpers/ListRenderer'
import SRTitle from '../SRTitle'

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
    <SRTitle text="Features" />
    <ListRenderer data={featuresData} Component={Feature} />
  </section>
)

export default Features
