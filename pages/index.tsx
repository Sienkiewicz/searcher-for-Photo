import styles from '../styles/Home.module.scss'
import { SearchBar } from '../components/searchBar/SearchBar'
import { FC, useEffect, useState } from 'react'
import { unsplash } from '../helpers/unsplash'
import { Item } from '../helpers/types/types'
import { Orientation } from 'unsplash-js'
import { Random } from 'unsplash-js/dist/methods/photos/types'
import { GetStaticProps } from 'next'
import { setFittedPic } from '../helpers/helpers'


type Props = {
  item: Item | Random
}

const Home: FC<Props> = ({ item }) => {
  const [urlOfPic, setUrlOfPic] = useState<string>('')

  useEffect(() => {
    if (!item) {
      let orientation: Orientation =
        window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'
      unsplash.photos.getRandom({ orientation: orientation }).then((result) => {
        switch (result.type) {
          case 'error':
            console.log('error occurred: ', result.errors[0])
          case 'success':
            const photo = result.response
          setFittedPic({ set: setUrlOfPic, item: photo })
        }
      })
    } else {
      setUrlOfPic(item.urls.regular)
    }
  }, [item])

  return (
    <div className='container'>
      <div className={styles.searchBar}>
        <SearchBar />
      </div>
      <style jsx>{`
        .container {
          background: #000 url(${urlOfPic}) 0 0 no-repeat;
          background-size: cover;
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const item: Item | Random = await unsplash.photos
    .getRandom({})
    .then((result) => {
      switch (result.type) {
        case 'error':
          console.log('error occurred: ', result.errors[0])
        case 'success':
          return result.response
      }
    })

  if (!item) {
    return {
      notFound: true,
    }
  }

  return {
    props: { item },
  }
}
