import { memo, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../searchBar/SearchBar.module.scss'
import { WordHint } from '../wordHint/WordHint'
import { arrayOfWhatDidYouMean } from '../../helpers/helpers'

export const SearchBar = memo(() => {
  const [value, setValue] = useState('')
  const [array, setArray] = useState<string[]>([])
  const router = useRouter()

  const keyWords = () => setArray(arrayOfWhatDidYouMean(value))

  const setBrowserLine = ({
    e,
    arg,
  }: {
    e: React.KeyboardEvent | React.MouseEvent
    arg: string
  }) => {
    let query = arg.split(' ').join('-')
    e.preventDefault()
    router.push(`/photos/${query}`)
    setValue('')
    setArray([])
  }

  const onTypeWord = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value)
    e.target.value.length > 3 && keyWords()
  }

  const onPressEnter = (e: React.KeyboardEvent): void => {
    if (e.key === 'Enter') {
      setBrowserLine({ e, arg: value })
    }
  }

  const handlerClick = (e: React.MouseEvent, word: string): void => {
    setBrowserLine({ e, arg: word })
  }

  const onClickSearch = () => {
    if (value.length > 0) {
      keyWords()
    }
  }

  useEffect(() => {
    if (value.length > 3) {
      if (arrayOfWhatDidYouMean(value).length > 0) {
        keyWords()
      } else {
        setArray([`you don't have any matches`])
      }
    } else {
      setArray([])
    }
  }, [value])

  return (
    <div className={styles.container}>
      <form data-test='homepage-search-form-form'>
        <button
          className={styles.button}
          title='Search Unsplash'
          type='submit'
          data-test='homepage-header-search-form-button'
        >
          <svg
            width='32'
            height='32'
            version='1.1'
            viewBox='0 0 32 32'
            aria-hidden='false'
          >
            <path d='M22 20c1.2-1.6 2-3.7 2-6 0-5.5-4.5-10-10-10S4 8.5 4 14s4.5 10 10 10c2.3 0 4.3-.7 6-2l6.1 6 1.9-2-6-6zm-8 1.3c-4 0-7.3-3.3-7.3-7.3S10 6.7 14 6.7s7.3 3.3 7.3 7.3-3.3 7.3-7.3 7.3z'></path>
          </svg>
        </button>

        <input
          className={styles.input}
          onClick={onClickSearch}
          onChange={onTypeWord}
          onKeyDown={onPressEnter}
          type='search'
          value={value}
          autoComplete='off'
          name='searchKeyword'
          placeholder='Search photos'
          required
          data-test='homepage-header-search-form-input'
          title='Search'
          autoCapitalize='none'
          spellCheck='false'
        />
      </form>
      {array.length != 0 && (
        <WordHint
          array={array}
          handlerClick={handlerClick}
          setArray={setArray}
        />
      )}
    </div>
  )
})
