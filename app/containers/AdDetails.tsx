import * as React from 'react'
import {ProductAd} from '../interfaces/Product'
import {localhostAxios} from '../axios'

interface AdDetailsProps {
  productAd?: ProductAd
}

export class AdDetails extends React.Component<AdDetailsProps, any> {
  constructor() {
    super()
  }

  render() {
    if (!this.props.productAd) {
      return (
        <div>
          <h3>No ad uploaded yet</h3>
        </div>
      )
    } else {
      return (
        <div>
          <p>Image url: {this.props.productAd.imageUrl}</p>
          <p>BD url: {this.props.productAd.bdUrl}</p>
          <p>Hits: {this.props.productAd.hitCount}</p>
        </div>
      )
    }
	}
}
