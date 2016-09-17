import * as React from 'react'
import {axios} from '../axios'

export class UploadAd extends React.Component<any, any> {
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
			<div className="container">
        <h1>Upload Ad for {this.props.name}</h1>
        <label className="label">Import file</label>
        <p className="control">
          <input className="input" type="file" accept=".gif,.jpg,.jpeg,.png,.pdf,.psd,.ai" />
        </p>
			</div>
		)
	}
}