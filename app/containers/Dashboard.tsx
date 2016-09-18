import * as React from 'react'
import {buildDirectAxios, localhostAxios} from '../axios'
import {Product, ProductAd} from '../interfaces/Product'
import {ProductList} from './ProductList'
import {ProductDetails} from './ProductDetails'

interface DashboardState {
  products: Array<Product>,
  selectedProduct?: Product,
  selectedProductAd?: ProductAd
}

export class Dashboard extends React.Component<void, DashboardState> {
  constructor() {
    super()
    this.state = {
      products: [],
      selectedProduct: null,
      selectedProductAd: null
    }
  }

  componentDidMount() {
    buildDirectAxios.get('/products/?query=wood').then((response: any) => {
    // axios.get('/seller/products?apikey=bd441e305681cf6d28f42362c0e84c8335d95972b72e7c7adc1db4ebafa6388e').then((response: any) => {
      const products = response.data.data.products
      // const products = response.data.data
      console.log(products)
      this.setState({products: products})
    })
  }

  onProductClick(selectedProduct: Product) {
    localhostAxios.get(`/product/${selectedProduct.skuNumber}`).then((response: any) => {
      this.setState({
        products: this.state.products,
        selectedProduct: selectedProduct,
        selectedProductAd: response.data
      })
    })
    
  }

  render() {
		return (
			<div>
        <ProductList products={this.state.products}
                     selectedProduct={this.state.selectedProduct}
                     onProductClick={(product: Product) => this.onProductClick(product)} />
        <ProductDetails selectedProduct={this.state.selectedProduct} selectedProductAd={this.state.selectedProductAd} />

			</div>
		)
	}
}
