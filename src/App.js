import logo from './logo.svg';
import './App.css';
import './app2.css';
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import ShopPage from "./components/Shop/ShopPage";
import TrackOrder from "./components/TrackOrder/TrackOrder";
import Cart from "./components/Cart/Cart";

import React from "react";
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor() {
		super();
		var queryString = window.location.search;
		var urlParams = new URLSearchParams(queryString);
		var succ = "";
		var mess = "";
		if (urlParams.has('success')) {
			succ = urlParams.get('success');
		}
		if (succ != "") {
			if (succ === "t") {
				mess = "Order placed successfully, please see your email for details.";
			}
			else {
				mess = "An error occurred with placing your order, please try again later.";
			}
		}
		
		this.state = {
			Open: "f",
			SelectedPage: "home",
			Message: mess,
			Cart:{
				p1: "0",
				p2: "0",
				p3: "0",
				p4: "0",
				p5: "0",
				p6: "0",
				p7: "0",
				p8: "0",
				p9: "0",
				p10: "0",
				p11: "0"
			}
		}
		
		

		
		this.handleOpenCloseNav = this.handleOpenCloseNav.bind(this);
		this.homeP = this.homeP.bind(this);
		this.trackOrderP = this.trackOrderP.bind(this);
		this.shopP = this.shopP.bind(this);
		this.cartP = this.cartP.bind(this);
		this.clearMes = this.clearMes.bind(this);
		this.AddedToCart = this.AddedToCart.bind(this);
		this.AddToCart = this.AddToCart.bind(this);
		
		
		
	}
	
	render() {
		var MESSAGE;
		var page;
		
		if (this.state.Message != "") {
			MESSAGE = (
			<div id="MESSAGE_BACK">
				<div id="MESSAGE_DIV">
					<div id="MESSAGE_P">{this.state.Message}</div>
					<div id="MESSAGE_BUTTON" onClick={this.clearMes}>Ok</div>
				</div>
			</div>
			);
		}
		
		if (this.state.SelectedPage === "home") {
			page = <Home message={this.AddedToCart} gtc={this.cartP} gts={this.shopP} cart={this.state.Cart}/>
		}
		else if (this.state.SelectedPage === "shop") {
			page = <ShopPage ATC={this.AddToCart} cart={this.state.Cart} gtc={this.cartP}/>
		}
		else if (this.state.SelectedPage === "cart") {
			page = <Cart cart={this.state.Cart} atc={this.AddToCart}/>
		}
		return (
			<div id="BACKGROUND">
				<div id="FORGROUND">
				<NavBar Open={this.state.Open} handleOpenClose={this.handleOpenCloseNav} homeH={this.homeP} trackH={this.trackOrderP} shopH={this.shopP} cartH={this.cartP}/>
				{page}
				{MESSAGE}
				</div>
			</div>
		);
	}
	
	
	handleOpenCloseNav() {
		if (this.state.Open === "t") {
			this.setState({
				Open: "f"
			});
		}
		else {
			this.setState({
				Open: "t"
			});
		}
	}
	
	homeP() {
		this.setState({
			SelectedPage: "home",
			Open: "f"
		});
	}
	trackOrderP() {
		this.setState({
			SelectedPage: "track",
			Open: "f"
		});
	}
	shopP() {
		this.setState({
			SelectedPage: "shop",
			Open: "f"
		});
	}
	cartP() {
		this.setState({
			SelectedPage: "cart",
			Open: "f"
		});
	}
	
	clearMes() {
		this.setState({
			Message: ""
		});
	}
	AddedToCart() {
		this.setState({
			Message: "Added to cart"
		});
	}
	
	AddToCart(IdToAdd, am) {
		if (IdToAdd === "1") {
			let newP = parseInt(this.state.Cart.p1) + am;
			let newCart = {
				p1: newP,
				p2: this.state.Cart.p2,
				p3: this.state.Cart.p3,
				p4: this.state.Cart.p4,
				p5: this.state.Cart.p5,
				p6: this.state.Cart.p6,
				p7: this.state.Cart.p7,
				p8: this.state.Cart.p8,
				p9: this.state.Cart.p9,
				p10: this.state.Cart.p10,
				p11: this.state.Cart.p11
			}
			this.setState({Cart: newCart});
		}
		else if (IdToAdd === "2") {
			let newP = parseInt(this.state.Cart.p2) + am;
			let newCart = {
				p1: this.state.Cart.p1,
				p2: newP,
				p3: this.state.Cart.p3,
				p4: this.state.Cart.p4,
				p5: this.state.Cart.p5,
				p6: this.state.Cart.p6,
				p7: this.state.Cart.p7,
				p8: this.state.Cart.p8,
				p9: this.state.Cart.p9,
				p10: this.state.Cart.p10,
				p11: this.state.Cart.p11
			}
			this.setState({Cart: newCart});
			
			
		}
		else if (IdToAdd === "3") {
			let newP = parseInt(this.state.Cart.p3) + am;
			let newCart = {
				p1: this.state.Cart.p1,
				p2: this.state.Cart.p2,
				p3: newP,
				p4: this.state.Cart.p4,
				p5: this.state.Cart.p5,
				p6: this.state.Cart.p6,
				p7: this.state.Cart.p7,
				p8: this.state.Cart.p8,
				p9: this.state.Cart.p9,
				p10: this.state.Cart.p10,
				p11: this.state.Cart.p11
			}
			this.setState({Cart: newCart});
		}
		else if (IdToAdd === "4") {
			let newP = parseInt(this.state.Cart.p4) + am;
			
			let newCart = {
				p1: this.state.Cart.p1,
				p2: this.state.Cart.p2,
				p3: this.state.Cart.p3,
				p4: newP,
				p5: this.state.Cart.p5,
				p6: this.state.Cart.p6,
				p7: this.state.Cart.p7,
				p8: this.state.Cart.p8,
				p9: this.state.Cart.p9,
				p10: this.state.Cart.p10,
				p11: this.state.Cart.p11
			}
			this.setState({Cart: newCart});
		}
		else if (IdToAdd === "5") {
			let newP = parseInt(this.state.Cart.p5) + am;
			
			let newCart = {
				p1: this.state.Cart.p1,
				p2: this.state.Cart.p2,
				p3: this.state.Cart.p3,
				p4: this.state.Cart.p4,
				p5: newP,
				p6: this.state.Cart.p6,
				p7: this.state.Cart.p7,
				p8: this.state.Cart.p8,
				p9: this.state.Cart.p9,
				p10: this.state.Cart.p10,
				p11: this.state.Cart.p11
			}
			this.setState({Cart: newCart});
		}
		else if (IdToAdd === "6") {
			let newP = parseInt(this.state.Cart.p6) + am;
			
			let newCart = {
				p1: this.state.Cart.p1,
				p2: this.state.Cart.p2,
				p3: this.state.Cart.p3,
				p4: this.state.Cart.p4,
				p5: this.state.Cart.p5,
				p6: newP,
				p7: this.state.Cart.p7,
				p8: this.state.Cart.p8,
				p9: this.state.Cart.p9,
				p10: this.state.Cart.p10,
				p11: this.state.Cart.p11
			}
			this.setState({Cart: newCart});
		}
		else if (IdToAdd === "7") {
			let newP = parseInt(this.state.Cart.p7) + am;
			
			let newCart = {
				p1: this.state.Cart.p1,
				p2: this.state.Cart.p2,
				p3: this.state.Cart.p3,
				p4: this.state.Cart.p4,
				p5: this.state.Cart.p5,
				p6: this.state.Cart.p6,
				p7: newP,
				p8: this.state.Cart.p8,
				p9: this.state.Cart.p9,
				p10: this.state.Cart.p10,
				p11: this.state.Cart.p11
			}
			this.setState({Cart: newCart});
		}
		else if (IdToAdd === "8") {
			let newP = parseInt(this.state.Cart.p8) + am;
			
			let newCart = {
				p1: this.state.Cart.p1,
				p2: this.state.Cart.p2,
				p3: this.state.Cart.p3,
				p4: this.state.Cart.p4,
				p5: this.state.Cart.p5,
				p6: this.state.Cart.p6,
				p7: this.state.Cart.p7,
				p8: newP,
				p9: this.state.Cart.p9,
				p10: this.state.Cart.p10,
				p11: this.state.Cart.p11
			}
			this.setState({Cart: newCart});
		}
		else if (IdToAdd === "9") {
			let newP = parseInt(this.state.Cart.p9) + am;
			
			let newCart = {
				p1: this.state.Cart.p1,
				p2: this.state.Cart.p2,
				p3: this.state.Cart.p3,
				p4: this.state.Cart.p4,
				p5: this.state.Cart.p5,
				p6: this.state.Cart.p6,
				p7: this.state.Cart.p7,
				p8: this.state.Cart.p8,
				p9: newP,
				p10: this.state.Cart.p10,
				p11: this.state.Cart.p11
			}
			this.setState({Cart: newCart});
		}
		else if (IdToAdd === "10") {
			let newP = parseInt(this.state.Cart.p10) + am;
			
			let newCart = {
				p1: this.state.Cart.p1,
				p2: this.state.Cart.p2,
				p3: this.state.Cart.p3,
				p4: this.state.Cart.p4,
				p5: this.state.Cart.p5,
				p6: this.state.Cart.p6,
				p7: this.state.Cart.p7,
				p8: this.state.Cart.p8,
				p9: this.state.Cart.p9,
				p10: newP,
				p11: this.state.Cart.p11
			}
			this.setState({Cart: newCart});
		}
		else if (IdToAdd === "11") {
			let newP = parseInt(this.state.Cart.p11) + am;
			
			let newCart = {
				p1: this.state.Cart.p1,
				p2: this.state.Cart.p2,
				p3: this.state.Cart.p3,
				p4: this.state.Cart.p4,
				p5: this.state.Cart.p5,
				p6: this.state.Cart.p6,
				p7: this.state.Cart.p7,
				p8: this.state.Cart.p8,
				p9: this.state.Cart.p9,
				p10: this.state.Cart.p10,
				p11: newP
			}
			this.setState({Cart: newCart});
		}
	}
	
}

export default App;
