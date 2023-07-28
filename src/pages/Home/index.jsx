// HomePage/index.jsx
import React from 'react'
import styles from './Home.module.css'
import Hero from '../../components/Hero'
import Features from '../../components/Features'

const Home = () => (
  <main className={styles.homeContainer}>
    <Hero
      title="Promoted Content"
      subtitles={['No fees.', 'No minimum deposit.', 'High interest rates.']}
      text="Open a savings account with Argent Bank today!"
    />
    <Features />
  </main>
)

export default Home
