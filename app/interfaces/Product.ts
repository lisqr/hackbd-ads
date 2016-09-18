interface MainImage {
  alt: string,
  thumbnails: Array<any>,
  url: string
}

export interface Product {
  mainImage: MainImage,
  images: Array<string>,
  overallRating: number,
  skuNumber: string,
  price: number,
  priceUnit: string,
  regularPrice: number,
  url: string,
  title: string,
  reviewCount: number
}

export interface ProductAd {
  imageUrl: string,
  bdUrl: string,
  hitCount: number,
  clickCount: number
}
