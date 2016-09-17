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
          <div>
            
          </div>
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
