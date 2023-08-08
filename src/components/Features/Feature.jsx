import React from 'react'
import PropTypes from 'prop-types'
import styles from './Feature.module.css'

/**
 * A component that displays a single feature with an associated icon, title, and description.
 *
 * @component
 * @param {Object} props
 * @param {string} props.imgSrc - The source URL of the feature's icon.
 * @param {string} props.imgAlt - The alternative text for the feature's icon, used for accessibility.
 * @param {string} props.title - The title of the feature.
 * @param {string} props.description - A brief description or explanation of the feature.
 * @returns {React.ReactNode} A rendered feature item with an icon, title, and description.
 */

const Feature = ({ imgSrc, imgAlt, title, text }) => (
  <div className={styles.featureItem}>
    <img src={imgSrc} alt={imgAlt} className={styles.featureIcon} />
    <h3 className={styles.featureItemTitle}>{title}</h3>
    <p>{text}</p>
  </div>
)

Feature.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Feature
