import Image from 'next/image'
import { FC, memo } from 'react'
import { ResultsEntity } from '../../helpers/types/arrayOfPhotosFromQuery'
import styles from '../Card/Card.module.scss'
import { Tag } from './Tag'

type Props = {
  item: ResultsEntity
  setIsZoom: (arg: boolean) => void
  setItem: (item: ResultsEntity) => void
}

export const Card: FC<Props> = memo(({ item, setIsZoom, setItem }) => {
  let tags = item.tags.slice(0, 3)

  const zoomImage = () => {
    setIsZoom(true)
    setItem(item)
  }
  return (
    <div className={styles.card} key={item.id}>
      <Image
        onClick={zoomImage}
        src={item.urls.small}
        alt={item.alt_description}
        width={item.width}
        height={item.height}
        quality={30}
      />
      <div className={styles.tags}>
        {tags && tags.map((item) => <Tag key={item.title} tag={item.title} />)}
      </div>
    </div>
  )
})
