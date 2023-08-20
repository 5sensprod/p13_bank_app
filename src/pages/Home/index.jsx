// HomePage/index.jsx
import React from 'react'
import styles from './Home.module.css'
import Hero from '../../components/Hero'
import Features from '../../components/Features'

const Home = () => (
  <main className={styles.homeContainer}>
    <Hero />
    <Features />
  </main>
)

export default Home
