import { arrayOfKeywords } from './../public/arrayOfKeywords';
import { ResultsEntity } from './types/arrayOfPhotosFromQuery';
import { Dispatch, SetStateAction } from "react"
import { Random } from "unsplash-js/dist/methods/photos/types"
import { Item } from "./types/types"


export const setFittedPic = ({
  set,
  item,
}: {
  set: Dispatch<SetStateAction<string>>
  item: Item | Random | ResultsEntity
}): void => {
  let wide = window.innerWidth
  if (wide < 576) {
    set(`${item.urls.small}&q50`)
  } else if (wide < 1200) {
    set(`${item.urls.regular}&q50`)
  } else {
    set(`${item.urls.full}&q50`)
  }
}

export const arrayOfWhatDidYouMean = (value: string): string[] => {
  let arrayOfKeys = arrayOfKeywords.reduce((ack, item) => {
    if (item.includes(value.toLowerCase())) {
      ack.push(item)
    }
    return ack
  }, [])
  let array = Array.from(new Set(arrayOfKeys)).slice(0, 5)
  return array
}

