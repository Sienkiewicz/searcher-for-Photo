import { useRouter } from 'next/router'
import styles from '../photos/[keywords].module.scss'
import { FC, memo, useEffect, useState } from 'react'
import { unsplash } from '../../helpers/unsplash'
import { SearchBar } from '../../components/searchBar/SearchBar'
import { Card } from '../../components/card/Card'
import { ImageOverlay } from '../../components/imageOverlay/ImageOverlay'
import { HomeButton } from '../../components/buttons/homeButton/HomeButton'
import {
  ResultsEntity,
  TypeOfArrayOfPhotosFromQuery,
} from '../../helpers/types/arrayOfPhotosFromQuery'

const PhotoSearch: FC = memo(() => {
  const [arrayOfImg, setArrayOfImg] = useState<ResultsEntity[]>()
  const keywords = (useRouter().query.keywords as string)
  const [isZoom, setIsZoom] = useState(false)
  const [item, setItem] = useState<ResultsEntity>()

  useEffect(() => {
    if (keywords) {
      unsplash.search.getPhotos({ query: keywords }).then((result) => {
        switch (result.type) {
          case 'error':
            console.log('error occurred: ', result.errors[0])
          case 'success':
            const photos = result.response as TypeOfArrayOfPhotosFromQuery
            if (result) {
              setArrayOfImg(photos.results)
            }
        }
      })
    }
  }, [keywords])

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <HomeButton />
        <div className={styles.searchBar}>
          <SearchBar />
        </div>
      </div>
      {keywords && <h1>{keywords.replace(/-/g, ' ')}</h1>}
      <div className={styles.box}>
        {arrayOfImg && arrayOfImg.map((item) => (
          <Card
            key={item.id}
            item={item}
            setIsZoom={setIsZoom}
            setItem={setItem}
          />
        ))}
      </div>
      {isZoom && (
        <div className={styles.zIndex}>
          {isZoom && <ImageOverlay item={item} setIsZoom={setIsZoom} />}
        </div>
      )}
    </main>
  )
})

export default PhotoSearch
