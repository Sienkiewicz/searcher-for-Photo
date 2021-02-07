import { useRouter } from 'next/router'
import { FC, memo } from 'react'
import styles from '../Card/Card.module.scss'

type Props = {
  tag: string
}

export const Tag: FC<Props> = memo(({ tag }) => {
  const router = useRouter()

  const findWithTag = (): void => {
    router.push(`/photos/${tag}`)
  }
  return (
    <div onClick={findWithTag} className={styles.tag}>
      {tag}
    </div>
  )
})
