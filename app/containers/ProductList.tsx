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
        {this.props.products.map(product => {
          if (this.props.selectedProduct != null && product.skuNumber == this.props.selectedProduct.skuNumber) {
            return (
              <div className='row product-list-element'>
                <div key={product.skuNumber} onClick={() => this.props.onProductClick(product)}>
                  <h5 className="selected">{product.title}</h5>
                </div>
              </div>
            )
          } else {
            return (
              <div className='row product-list-element'>
                <div key={product.skuNumber} onClick={() => this.props.onProductClick(product)}>
                  <h5>{product.title}</h5>
                </div>
              </div>
            )
          }
        })}
			</div>
		)
	}
}
