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

  getCTR(clicks: number, hits: number) {
    return (isNaN(clicks/hits) ? 0 : clicks/hits)
  }

  render() {
    if (!this.props.productAd) {
      return (
        <div>
          <h3>No ad uploaded yet</h3>
        </div>
      )
    } else {
      const ad = this.props.productAd

      console.log(this.props.productAd)
      return (
        <div>

          <div>
            <img src={ad.imageUrl} className="img-fluid" style={{maxWidth: '728px'}} />
            <div>
            <h4>Stats for Active Ad</h4>
              <p><strong>Hits</strong>  {ad.hitCount}</p>
              <p><strong>Clicks</strong>  {ad.clickCount}</p>
              <p><strong>Click Through Rate</strong>  {this.getCTR(ad.clickCount, ad.hitCount)}</p>
            </div>
          </div>
        </div>
      )
    }
	}
}
