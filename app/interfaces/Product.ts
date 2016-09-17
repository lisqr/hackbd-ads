interface MainImage {
  alt: string,
  thumbnails: Array<any>,
  url: string
}

export interface Product {
  mainImage: MainImage,
  images: Array<string>,
  overallRating: number,
  skuNumber: number,
  price: number,
  priceUnit: string,
  regularPrice: number,
  url: string,
  title: string,
  reviewCount: number
}
