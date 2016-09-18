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

export class ProductList extends React.Component<ProductListProps, void> {
  render() {
		return (
			<div id='product-list'>
        <h1>Your Products</h1>
        <hr />
        {this.props.products.map(product => {
          if (this.props.selectedProduct != null && product.skuNumber == this.props.selectedProduct.skuNumber) {
            return (
              <div key={product.skuNumber} onClick={() => this.props.onProductClick(product)}>
                <h4 className="selected">{product.title}</h4>
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
