import * as React from 'react'
import {Product} from '../interfaces/Product'

interface ProductListProps {
  products: Array<Product>,
  selectedProduct?: Product,
  onProductClick: Function
}

interface ProductListState {
  products: Array<Product>,
  selectedProduct?: Product
}

export class ProductList extends React.Component<ProductListProps, ProductListState> {
  constructor(props: ProductListProps) {
    super(props)
    this.state = props
  }

  componentWillReceiveProps(props: ProductListProps) {
    this.setState({
      products: props.products,
      selectedProduct: props.selectedProduct  
    })
  }

  render() {
		return (
			<div id='product-list'>
        <h1>Your Products</h1>
        <hr />
        {this.state.products.map(product => {
          if (this.state.selectedProduct != null && product.skuNumber == this.state.selectedProduct.skuNumber) {
            return (
              <div key={product.skuNumber} onClick={() => this.props.onProductClick(product)}>
                <h2>{product.title}</h2>
              </div>
            )
          } else {
            return (
              <div key={product.skuNumber} onClick={() => this.props.onProductClick(product)}>
                <h4>{product.title}</h4>
              </div>
            )
          }
        })}
			</div>
		)
	}
}
