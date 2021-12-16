import React from "react";
import sc from "./sc.svg";
import "./TrackOrder.css";

class TrackOrder extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			EmailText: "",
			PhoneText: "",
			NameText: "",
			ShippingText: ""
		}
		
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePhoneChange = this.handlePhoneChange.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleShipChange = this.handleShipChange.bind(this);
	}
	
	render() {
		return(
			<div id="TrackOrderPage">
				<div id="TOPDIV">
					<strong>S t a r l u x&nbsp;&nbsp;&nbsp;L a s h e s</strong>
					<img src={sc} id="TOPDIV_CART">
						
					</img>
				</div>
				<br />
				<p id="TRACK_HEADER">Fill out this form to view all your orders</p>
				<br />
				<input type="text" id="TRACK_EMAIL" placeholder="Enter email used for order" value={this.state.EmailText} onChange={this.handleEmailChange}></input>
				<br/>
				<br/>
				<input type="text" id="TRACK_PHONE" placeholder="Enter phone used for order" value={this.state.PhoneText} onChange={this.handlePhoneChange}></input>
				<br/>
				<br/>
				<input type="text" id="TRACK_NAME" placeholder="Enter name used for order" value={this.state.NameText} onChange={this.handleNameChange}></input>
				<br/>
				<br/>
				<input type="text" id="TRACK_SHIPPING" placeholder="Enter shipping address used for order" value={this.state.ShippingText} onChange={this.handleShipChange}></input>
				<br />
				<br />
				<div id="TRACK_SUBMI_BUTT">
					Submit
				</div>
			</div>
		);
	}
	
	handleEmailChange(event) {
		this.setState({
			EmailText: event.target.value
		});
	}
	handlePhoneChange(event) {
		this.setState({
			PhoneText: event.target.value
		});
	}
	handleNameChange(event) {
		this.setState({
			NameText: event.target.value
		});
	}
	handleShipChange(event) {
		this.setState({
			ShippingText: event.target.value
		});
	}
}

export default TrackOrder;