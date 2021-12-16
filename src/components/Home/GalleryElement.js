import React from "react";
import "./GalleryElement.css";

class GalleryElement extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		let style0 = {
			left: this.props.left
		}
		let style1 = {
			backgroundImage: this.props.image
		}
		return(
			<div className="GalleryElement" style={style0} onClick={this.props.message}>
				<img id="GALLERY_IMG" src={this.props.image}></img>
			</div>
		);
	}
}

export default GalleryElement;