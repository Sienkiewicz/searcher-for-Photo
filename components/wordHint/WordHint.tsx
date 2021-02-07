import { FC, memo, useEffect, useRef } from 'react'
import styles from '../WordHint/WordHint.module.scss'

type Props = {
  array: string[]
  handlerClick: (
    e: React.MouseEvent,
    word: string
  ) => void
  setArray: ([]) => void
}

export const WordHint: FC<Props> = memo(({ array, handlerClick, setArray }) => {
  const sortRef = useRef()

  const handleOutsideClick = (e: MouseEvent) => {
    if (array.length > 0) {
      if (!e.composedPath().includes(sortRef.current)) {
        setArray([])
      }
    }
  }

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick)
    return () => {
      document.body.removeEventListener('click', handleOutsideClick)
    }
  }, [])
  return (
    <div ref={sortRef} className={styles.listbox}>
      {array.map((word) => (
        <p key={word} onClick={(e) => handlerClick(e, word)}>
          {word}
        </p>
      ))}
    </div>
  )
})
