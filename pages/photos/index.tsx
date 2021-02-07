import styles from '../photos/[keywords].module.scss'
import { FC, memo } from 'react'
import { SearchBar } from '../../components/searchBar/SearchBar'
import { HomeButton } from '../../components/buttons/homeButton/HomeButton'

const PhotoSearch: FC = memo(() => {


  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <HomeButton />
        <div className={styles.searchBar}>
          <SearchBar />
        </div>
      </div>
    </main>
  )
})

export default PhotoSearch
