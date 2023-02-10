export interface Home {
  id: number
  attributes: Attributes
}

export interface Attributes {
  name: string
  banners: Banners
  fybs: Fybs
}

export interface Banners {
  data: Daum[]
}

export interface Daum {
  id: number
  attributes: Attributes2
}

export interface Attributes2 {
  bannerText: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  bannerHeader?: string
  bannerImage: BannerImage
}

export interface BannerImage {
  data?: Daum2[]
}

export interface Daum2 {
  id: number
  attributes: Attributes3
}

export interface Attributes3 {
  name: string
  alternativeText: any
  caption: any
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: any
  provider: string
  provider_metadata: any
  createdAt: string
  updatedAt: string
}

export interface Formats {
  thumbnail: Thumbnail
  small: Small
  medium: Medium
  large: Large
}

export interface Thumbnail {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  url: string
}

export interface Small {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  url: string
}

export interface Medium {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  url: string
}

export interface Large {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  url: string
}

export interface Fybs {
  data: Daum3[]
}

export interface Daum3 {
  id: number
  attributes: Attributes4
}

export interface Attributes4 {
  solutionName: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  solutionDescription: string
}
