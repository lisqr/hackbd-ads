import * as React from 'react'
import axios from '../axios'

export class ProductDetails extends React.Component<any, any> {
  constructor() {
    super()
    this.state = {
      productDetails: {}
    }
  }

  componentDidMount() {
    axios.get('/products/10089623') // should be getting the SKU from props
      .then(function(res: any) {
          console.log(res);
          console.log("success");
          this.setState({productDetails: res.data.data});
      })
      .catch(function() {
          console.error("error");
      })
  }

  render() {

		return (
			<div className="container">
        <h1>Product Details</h1>
        <hr />

			</div>
		)
	}
}
