import * as React from 'react'
import {buildDirectAxios, localhostAxios} from '../axios'
const config = require('json!../../config.json')

interface UploadAdProps {
  name: string,
  sku: string,
  bdUrl: string
}

export class UploadAd extends React.Component<UploadAdProps, any> {
  constructor() {
    super()
    this.state = {
      ad: {}
    }
  }

  generateSignature(callback: any, params_to_sign: any){
    console.log(params_to_sign);
    $.ajax({
      url     : "http://www.my-domain.com/my_generate_signature %>",
      type    : "GET",
      dataType: "text",
      data    : { data: params_to_sign},
      complete: function() {console.log("complete")},
      success : function(signature, textStatus, xhr) { callback(signature); },
      error   : function(xhr, status, error) { console.log(xhr, status, error); }
    });
  }

  componentDidMount() {
    console.log(this.props);
    document.getElementById("upload_widget_opener").addEventListener("click", () => {
      cloudinary.openUploadWidget({ 
        cloud_name: config.cloudinaryName, 
        api_key: config.cloudinaryApiKey,
        upload_preset: config.cloudinaryPreset
        // upload_signature: this.generateSignature
      }, (error, result) => {
          console.log(error, result)
          if (error) {
            return console.error(error)
          }
          const imageUrl = result[0].url
          localhostAxios.post(`/product/${this.props.sku}/image?imageUrl=${imageUrl}&bdUrl=${this.props.bdUrl}`)
        }
      )
    }, false);
  }

  render() {
		return (
			<div>
        <h3>Upload Ad for {this.props.name}</h3>
        <button id="upload_widget_opener" type="button" className="btn btn-default">Upload ad images</button>
        
			</div>
		)
	}
}
