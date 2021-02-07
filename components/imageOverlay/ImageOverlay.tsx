import Image from 'next/image'
import React, { FC, memo} from 'react'
import { ResultsEntity } from '../../helpers/types/arrayOfPhotosFromQuery'
import styles from '../ImageOverlay/ImageOverlay.module.scss'

type Props = {
  item: ResultsEntity
  setIsZoom: (arg: boolean) => void
}

export const ImageOverlay: FC<Props> = memo(({ item, setIsZoom }) => {
  
  const zoomOut = (): void => {
    setIsZoom(false)
  }

  return (
    <>
      <div onClick={zoomOut} className={styles.mat}>
        <div className={styles.mobileCloseIcon}>
          <svg
            width='32'
            height='32'
            version='1.1'
            viewBox='0 0 32 32'
            aria-hidden='false'
          >
            <path d='M25.33 8.55l-1.88-1.88-7.45 7.45-7.45-7.45-1.88 1.88 7.45 7.45-7.45 7.45 1.88 1.88 7.45-7.45 7.45 7.45 1.88-1.88-7.45-7.45z'></path>
          </svg>
        </div>
        <div className={styles.name}>{item.user.name}</div>

        <Image
          src={item.urls.regular}
          alt={item.alt_description}
          width={item.width}
          height={item.height}
          quality={30}
        />
        <div className={styles.location}>{item.user.location}</div>
      </div>
      <div onClick={zoomOut} className='overlay' key={item.id}>
        <svg
          className={styles.svg}
          width='32'
          height='32'
          version='1.1'
          viewBox='0 0 32 32'
          aria-hidden='false'
        >
          <path d='M25.33 8.55l-1.88-1.88-7.45 7.45-7.45-7.45-1.88 1.88 7.45 7.45-7.45 7.45 1.88 1.88 7.45-7.45 7.45 7.45 1.88-1.88-7.45-7.45z'></path>
        </svg>
      </div>
      <style jsx>{`
        .overlay {
          position: fixed;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 2;
          cursor: pointer;
        }
      `}</style>
    </>
  )
})