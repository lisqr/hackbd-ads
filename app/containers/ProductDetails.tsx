import * as React from 'react'
import {UploadAd} from './UploadAd'
import {buildDirectAxios} from '../axios'
import {AdDetails} from './AdDetails'
import {Product, ProductAd} from '../interfaces/Product'

interface ProductDetailsProps {
  selectedProduct: Product,
  selectedProductAd: ProductAd
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
          <div className="panel panel-default center" style={{maxWidth: '800px'}}>
            <div className="panel-heading">
              <h2 className="panel-title">Ad for this Product</h2>
            </div>
            <div className="panel-body">
              <AdDetails productAd={this.props.selectedProductAd} />
              <hr />
              <UploadAd name={details.title} sku={details.skuNumber} bdUrl={details.url} />
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div id='product-details'>
          <h3 id='select-to-begin'>Select a product to begin</h3>
        </div>
      )
    }
  }
}
