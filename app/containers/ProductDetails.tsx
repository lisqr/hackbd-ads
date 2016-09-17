import * as React from 'react'
import {UploadAd} from './UploadAd'
import {axios} from '../axios'
import {Product} from '../interfaces/Product'

interface ProductDetailsProps {
  selectedProduct: Product,
}

interface ProductDetailsState {
  isFileUploaded: boolean,
  file: any
}

export class ProductDetails extends React.Component<ProductDetailsProps, ProductDetailsState> {
  constructor() {
    super()
    this.state = {
      isFileUploaded: false,
      file: null
    }
  }

  render() {
    if (this.props && this.props.selectedProduct) {
      var details = this.props.selectedProduct;
      console.log("deets", details)

      return (
        <div id='product-details'>
          <h1>Product Details</h1>
          <div className="flex-item">
            <img src={details.image} className="img-fluid" alt={details.title} />
            <dl className="dl-horizontal">
              <dt>Product Name</dt>
              <dd>{details.title}</dd>
              <dt>SKU Number</dt>
              <dd>{details.skuNumber}</dd>
              <dt>BuildDirect Link</dt>
              <dd><a href={details.url}>{details.url}</a></dd>
              <dt>Rating</dt>
              <dd>{details.overallRating}</dd>
              <dt>Review Count</dt>
              <dd>{details.reviewCount}</dd>
              <dt>Price / Unit</dt>
              <dd>{details.price} / {details.priceUnit}</dd>
            </dl>
          </div>
          <hr />
          <UploadAd name={details.title}/>
        </div>
      )
    } else {
      return (
        <div id='product-details'>
          <h1>Select a product to begin</h1>
        </div>
      )
    }
  }
}
