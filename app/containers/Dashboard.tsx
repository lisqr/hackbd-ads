import * as React from 'react'
import {Products} from './Products'
import {ProductDetails} from './ProductDetails'

interface Product {
  id: number
}

interface DashboardState {
  products: Array<Product>,
  selectedProduct?: Product
}

export class Dashboard extends React.Component<void, DashboardState> {
  constructor() {
    super()
    this.state = {
      products: [],
      selectedProduct: null
    }
  }

  render() {
		return (
			<div className="container">
        <h1>Dashboard</h1>
        <hr />
        <Products products={this.state.products}
                  selectedProduct={this.state.products} />
        <ProductDetails selectedProduct={this.state.selectedProduct} />

			</div>
		)
	}
}
