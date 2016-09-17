import * as React from 'react'
import {axios} from '../axios'

export class AdDetails extends React.Component<any, any> {
  constructor() {
    super()
    this.state = {
      ad: {}
    }
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
		return (
			<div>
        <h2>Ad Details</h2>
        <ul class="nav nav-pills">
        <li role="presentation" class="active"><a href="#">Active Ads</a></li>
        <li role="presentation"><a href="#">Get Links</a></li>
        <li role="presentation"><a href="#">Upload New Ad</a></li>
      </ul>
			</div>
		)
	}
}
