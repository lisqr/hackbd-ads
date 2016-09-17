import * as React from 'react'
import {Product} from '../interfaces/Product'

interface ProductListProps {
  products: Array<Product>,
  selectedProduct?: Product
}

interface ProductListState {
  products: Array<Product>,
  selectedProduct?: Product
}

export class ProductList extends React.Component<ProductListProps, ProductListState> {
  constructor(props: ProductListProps) {
    super(props)
    this.state = {
      products: props.products,
      selectedProduct: props.selectedProduct
    }
  }

  componentDidUpdate(props: ProductListProps) {
    this.setState(props)
  }

  render() {
		return (
			<div className='container' id='product-list'>
        <h1>Products</h1>
        <hr />
        {this.state.products.map(product => {
          <div>
            <h2>Product.id</h2>
          </div>
        })}
			</div>
		)
	}
}
