import React from "react";
import "./NavBar.css";

import opencl from "./open.svg";

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			Open: props.Open
		}
	}
	
	render() {
		let navops;
		
		if (this.state.Open === "t") {
			if (window.screen.width >= 450) {
				navops = {
					left: "100%",
					transform: "rotate(90deg)"
				}
			}
			else {
				navops = {
					left: "calc(100% - 50px)",
					transform: "rotate(90deg)"
				}
			}
		}
		else if (this.state.Open === "f") {
			navops = {
				left: "100%",
				transform: "rotate(0deg)"
			}
		}
		
		let style = {
			left: "0px"
		};
		if (this.state.Open === "f") {
			if (window.screen.width >= 400) {
				style = {
					left: "-400px"
				};
			}
			else {
				style = {
					left: "-" + window.screen.width + "px"
				}
			}
		}
		return(
			<div id="NAVBAR" style={style}>
				<div id="LOGO_NAVBAR"></div>
				<div id="HOMEBUTTON_NAVBAR" onClick={this.props.homeH}><span>Home</span></div>
				<div id="SHOPBUTTON_NAVBAR" onClick={this.props.shopH}>Shop</div>
				<div id="CART_NAVBAR" onClick={this.props.cartH}>View Cart</div>
				<img src={opencl} id="OPENCLOSE_NAVBAR" style={navops} onClick={this.props.handleOpenClose}></img>
			</div>
		);
	}
	
	UNSAFE_componentWillReceiveProps(props) {
		this.setState({
			Open: props.Open
		})
	}	
}

export default NavBar;