'use client'
import * as React from 'react'
import { useSpring, animated, config } from '@react-spring/web'
import styles from './styles.module.css'

export default function Porfolio() {
  const [{ background }] = useSpring(
    () => ({
      from: { background: '#b8afc7'},
      to: [
        { background: '#32a852' },
        { background: '#a26fa6)' },
        { background: '#4962d1' },
        { background: '#468051' },
        { background: '#5518ba' },
      ],
      config: config.molasses,
      loop: {
        reverse: true,
      },
    }),
    []
  )

  return (
    <div className={styles.container}>
      <div className={styles.squares}>
        <div className={styles.block} />
        <div className={styles.block} />
        <animated.div className={styles.block} style={{ background }} />
      </div>
      <animated.div className={styles.background} style={{ background }} />
    </div>
  )
}
