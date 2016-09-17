import * as React from 'react'
import axios from '../axios'
import {Product} from '../interfaces/Product'
import {ProductList} from './ProductList'
import {ProductDetails} from './ProductDetails'

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

  componentDidMount() {
    axios.get('/products/?query=wood')
  }

  render() {
		return (
			<div className="container">
        <h1>Dashboard</h1>
        <hr />
        <ProductList products={this.state.products}
                     selectedProduct={this.state.selectedProduct} />
        <ProductDetails selectedProduct={this.state.selectedProduct} />

			</div>
		)
	}
}
