import * as React from 'react'
import {axios} from '../axios'
const config = require('json!../../config.json')

export class UploadAd extends React.Component<any, any> {
  constructor() {
    super()
    this.state = {
      ad: {}
    }
  }

  generateSignature(callback: any, params_to_sign: any){
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
    var self = this;
    document.getElementById("upload_widget_opener").addEventListener("click", function() {
      cloudinary.openUploadWidget({ 
        cloud_name: config.cloudinaryName, 
        api_key: config.cloudinaryApiKey,
        upload_preset: config.cloudinaryPreset,
        upload_signature: this.generateSignature}, 
        function(error, result) { 
          console.log(error, result)
          var imageUrl = result[0].url
          axios.post(`http://localhost:444/product/${self.props.sku}?imageUrl=${imageUrl}`)
        });
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
