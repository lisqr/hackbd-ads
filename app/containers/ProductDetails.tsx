import * as React from 'react'
import axios from '../axios'
import {UploadAd} from './UploadAd'

export class ProductDetails extends React.Component<any, any> {
  constructor() {
    super()
    this.state = {
      productDetails: {}
    }
  }

  componentDidMount() {
    var self = this
    axios.get('/products/10089623') // should be getting the SKU from props
      .then(function(res: any) {
        console.log(res)
        console.log("success")
        self.setState({productDetails: res.data.data})
      })
      .catch(function() {
        console.error("error")
      })
  }

  render() {
    var details = this.state.productDetails;
    console.log("deets", details)
    for (var prop in details) {
      console.log("obj." + prop + " = " + details[prop])
    }

		return (
			<div className="container">
        <h1>Product Details</h1>
        <div>
          
        </div>
        <UploadAd name={details.productItemName}/>
			</div>
		)
	}
}
