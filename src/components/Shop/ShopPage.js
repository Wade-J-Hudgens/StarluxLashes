import React from "react";
import ShopContent from "./ShopContent";

import sc from "./sc.svg";

class ShopPage extends React.Component {
	constructor(props) {
		super(props);
	}
	calculateTotalAmount(c) {
		return (parseInt(c.p1)+parseInt(c.p2)+parseInt(c.p3)+parseInt(c.p4)+parseInt(c.p5)+parseInt(c.p6)+parseInt(c.p7)+parseInt(c.p8)+parseInt(c.p9)+parseInt(c.p10) + parseInt(c.p11));
	}
	render() {
		return(
			<div id="ShopPage">
				<div id="TOPDIV">
					<strong>S t a r l u x&nbsp;&nbsp;&nbsp;L a s h e s</strong>
					<img src={sc} id="TOPDIV_CART" onClick={this.props.gtc}>
						
					</img>
					<p id="TOP_DIV_T" onClick={this.props.gtc}><strong>{this.calculateTotalAmount(this.props.cart)}</strong></p>
					<div id="NUMBER_CART">
						
					</div>
				</div>
				<br />
				<ShopContent ATC={this.props.ATC}/>
			</div>
		);
	}
}

export default ShopPage;