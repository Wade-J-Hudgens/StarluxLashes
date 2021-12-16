import React from "react";
import "./ShopItem.css";

class ShopItem extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			name: props.name,
			price: props.price,
			description: props.description,
			description1: props.description1,
			description2: props.description2,
			id: props.id
		}
	}
	
	render() {
		return(
			<div id={"ShopItem_" + this.state.name} className="ContentItemDiv">
				<img src={this.props.image} className="ContentImg"></img>
				<p className="ContentNamePrice"><strong>{this.state.name} - </strong>{this.state.price}</p>
				
				{this.props.des}
				<div className="ContentATCButton" onClick={() => this.props.ATC(this.state.id, 1)}>
					Add to cart
				</div>
			</div>
		);
	}
	
	UNSAFE_componentWillReceiveProps() {
		this.setState({
			name: this.props.name,
			price: this.props.price,
			description: this.props.description,
			description1: this.props.description1,
			description2: this.props.description2,
			id: this.props.id
		});
	}
}

export default ShopItem;