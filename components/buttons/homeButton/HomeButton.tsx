import { useRouter } from 'next/router'
import { memo } from 'react'
import styles from '../HomeButton/HomeButton.module.scss'

export const HomeButton = memo(() => {
  const router = useRouter()

  const returnToHomePage = () => {
router.push('/')
  }
  return (
    <div onClick={returnToHomePage} className={styles.homeButton}>
      home
    </div>
  )
})
