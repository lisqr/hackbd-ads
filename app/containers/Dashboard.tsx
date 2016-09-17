import * as React from 'react'
import {axios} from '../axios'
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
    axios.get('/products/?query=wood').then((response: any) => {
      const products = response.data.data.products
      this.setState({products: products})
    })
  }

  onProductClick(selectedProduct: Product) {
    this.setState({
      products: this.state.products,
      selectedProduct: selectedProduct
    })
  }

  render() {
		return (
			<div>
        <h1>Dashboard</h1>
        <hr />
        <ProductList products={this.state.products}
                     selectedProduct={this.state.selectedProduct}
                     onProductClick={(product: Product) => this.onProductClick(product)} />
        <ProductDetails selectedProduct={this.state.selectedProduct} />

			</div>
		)
	}
}
