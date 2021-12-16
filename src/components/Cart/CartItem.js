import React from "react";
import "./CartItem.css";

class CI extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
				<div className="CartItemDiv">
					<img src={this.props.img} className="CartItemImg"></img>
					
					<br />
					
					<div className="CartItemDes">
						<div className="CartItemName"><strong>{this.props.name} -&nbsp;</strong></div>
						<div className="CartItemPrice">${this.props.price}</div>
						<div className="CartItemRemove" onClick={() => this.props.atc(this.props.id, (-1*this.props.quantity))}>Remove</div>
						<div className="CartItemSpace">&nbsp;</div>
						<div className="CartItemQuantityDiv">
							<div className="CartItemQuantityLower" onClick={() => this.props.atc(this.props.id, -1)}>
								-
							</div>
							
							<div className="CartItemQuantityNum">
								{this.props.quantity}
							</div>
							
							<div className="CartItemQuantityRaise" onClick={() => this.props.atc(this.props.id, 1)}>
								+
							</div>
						</div>
					</div>
				</div>
		);
	}
}



class CartItem extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		var R;
		if (parseInt(this.props.quantity) > 0) {
			R = <CI img={this.props.img} quantity={this.props.quantity} name={this.props.name} price={this.props.price} id={this.props.id} atc={this.props.atc} />
		}
		
		return(
			<div>
			{R}
			</div>
		);
	}
}

export default CartItem;