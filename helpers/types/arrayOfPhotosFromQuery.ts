export interface TypeOfArrayOfPhotosFromQuery {
  total: number
  total_pages: number
  results?: ResultsEntity[] | null
}
export interface ResultsEntity {
  id: string
  created_at: string
  updated_at: string
  promoted_at?: string | null
  width: number
  height: number
  color: string
  blur_hash: string
  description?: string | null
  alt_description: string
  urls: Urls
  links: Links
  categories?: null[] | null
  likes: number
  liked_by_user: boolean
  current_user_collections?: null[] | null
  sponsorship?: null
  user: User
  tags?: (TagsEntity | null)[] | null
}
export interface Urls {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
}
export interface Links {
  self: string
  html: string
  download: string
  download_location: string
}
export interface User {
  id: string
  updated_at: string
  username: string
  name: string
  first_name: string
  last_name: string
  twitter_username?: string | null
  portfolio_url?: string | null
  bio?: string | null
  location: string
  links: Links1
  profile_image: ProfileImage
  instagram_username?: string | null
  total_collections: number
  total_likes: number
  total_photos: number
  accepted_tos: boolean
}
export interface Links1 {
  self: string
  html: string
  photos: string
  likes: string
  portfolio: string
  following: string
  followers: string
}
export interface ProfileImage {
  small: string
  medium: string
  large: string
}
export interface TagsEntity {
  type: string
  title: string
  source?: Source | null
}
export interface Source {
  ancestry: Ancestry
  title: string
  subtitle: string
  description: string
  meta_title: string
  meta_description: string
  cover_photo: CoverPhoto
}
export interface Ancestry {
  type: TypeOrCategoryOrSubcategory
  category: TypeOrCategoryOrSubcategory
  subcategory?: TypeOrCategoryOrSubcategory1 | null
}
export interface TypeOrCategoryOrSubcategory {
  slug: string
  pretty_slug: string
}
export interface TypeOrCategoryOrSubcategory1 {
  slug: string
  pretty_slug: string
}
export interface CoverPhoto {
  id: string
  created_at: string
  updated_at: string
  promoted_at?: string | null
  width: number
  height: number
  color: string
  blur_hash: string
  description: string
  alt_description?: string | null
  urls: Urls
  links: Links
  categories?: null[] | null
  likes: number
  liked_by_user: boolean
  current_user_collections?: null[] | null
  sponsorship?: null
  user: User1
}
export interface User1 {
  id: string
  updated_at: string
  username: string
  name: string
  first_name: string
  last_name?: string | null
  twitter_username?: string | null
  portfolio_url?: string | null
  bio?: string | null
  location?: string | null
  links: Links1
  profile_image: ProfileImage
  instagram_username?: string | null
  total_collections: number
  total_likes: number
  total_photos: number
  accepted_tos: boolean
}
