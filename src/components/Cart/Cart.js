import React, {useState, useEffect} from "react";
import ReactDOM from 'react-dom';
import StripeCheckout from 'react-stripe-checkout';
import {loadStripe} from '@stripe/stripe-js';
import $ from 'jquery';
import CartItem from "./CartItem";

import "./Cart.css";



import Sweetheart from "./Images/image_64873272.JPG";
import Flirt from "./Images/image_64873274.JPG";
import DramaQueen from "./Images/image_64873275.JPG";

import Attitude from "./Images/image_6487327.JPG";
import GirlsNight from "./Images/image_64873278.JPG";
import Sassy from "./Images/image_64873276.JPG";

import Bossy from "./Images/image_64873271.JPG";
import Hollywood from "./Images/image_64873277.JPG";
import Shy from "./Images/image_64873273.JPG";

import Mirror from "./Images/Mirror.jpg";

import MagicLiner from "./Images/MagicLiner.jpg";

const stripePromise = loadStripe('pk_live_51IeV1TFQnc7FDtih6KC1xtA7fzlR9o5JPLhnNwL54oEWgb0ArT2es5UPjn0XuIWC2frWmhSsGu0EISZUXTRLNjc200K8CWaEQ6');



function GetTotalAmountWS(c) {
	let p1 = parseInt(c.p1);
	let p2 = parseInt(c.p2);
	let p3 = parseInt(c.p3);
	let p4 = parseInt(c.p4);
	let p5 = parseInt(c.p5);
	let p6 = parseInt(c.p6);
	let p7 = parseInt(c.p7);
	let p8 = parseInt(c.p8);
	let p9 = parseInt(c.p9);
	let p10 = parseInt(c.p10);
	let p11 = parseInt(c.p11);
	
	let T = (Math.round(((p1*1399+p2*1799+p3*1499+p4*1399+p5*1699+p6*1499+p7*1499+p8*1499+p9*1599+p10*1299+p11*1100)*1.08))*0.01);
	
	return(T);
	
}

function DisplayTotal(t) {
	let p = parseFloat(t).toFixed(2);
	if (parseInt(p) > 0) {
		return ("Checkout - $" + ((p)) + " ($4.99 Shipping)");
	}
	else {
		return ("No items in cart");
	}
}

const ProductDisplay = (props) => (
  <section id="CheckoutDiv">
    <div id="checkout-button" onClick={props.handleClick}>
		{DisplayTotal(GetTotalAmountWS(props.c))}
    </div>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);


const Cart = (props) => {
	const[u, setU] = useState(0);
	var P1 = <div></div>;
	var P2 = <div></div>;
	var P3 = <div></div>;
	var P4 = <div></div>;
	var P5 = <div></div>;
	var P6 = <div></div>;
	var P7 = <div></div>;
	var P8 = <div></div>;
	var P9 = <div></div>;
	var P10 = <div></div>;
	var P11 = <div></div>;
	const handleClick = async (event) => {
		if (parseInt(GetTotalAmountWS(props.cart)) <= 0) {
			return 0;
		}
		const stripe = await stripePromise;
		
		$.ajax({
			type: "POST",
			url: "./create-checkout-session.php",
			data: props.cart,
			dataType: "text",
			success: function(data) {
				stripe.redirectToCheckout({
					sessionId: data,
				});
			},
			
			error: function(jqXHR, textStatus, errorThrown) {
				alert("Error, status = " + textStatus + ", " +
					"error thrown: " + errorThrown
				);
			}
		});
	};
	
	
	
	
	
	if (props.cart.p1 !== "0") {
		P1 = <div><br /><CartItem atc={props.atc} id="1" img={Shy} name={"Shy"} price="13.99" quantity={props.cart.p1} /></div>
	}
	if (props.cart.p2 !== "0") {
		P2 = <div><br /><CartItem atc={props.atc} id="2" img={DramaQueen} name={"DramaQueen"} price="17.99" quantity={props.cart.p2} /></div>
	}
	if (props.cart.p3 !== "0") {
		P3 = <div><br /><CartItem atc={props.atc} id="3" img={Attitude} name={"Attitude"} price="14.99" quantity={props.cart.p3} /></div>
	}
	if (props.cart.p4 !== "0") {
		P4 = <div><br /><CartItem atc={props.atc} id="4" img={Flirt} name={"Flirt"} price="13.99" quantity={props.cart.p4} /></div>
	}
	if (props.cart.p5 !== "0") {
		P5 = <div><br /><CartItem atc={props.atc} id="5" img={GirlsNight} name={"GirlsNight"} price="17.99" quantity={props.cart.p5} /></div>
	}
	if (props.cart.p6 !== "0") {
		P6 = <div><br /><CartItem atc={props.atc} id="6" img={Sweetheart} name={"Sweetheart"} price="14.99" quantity={props.cart.p6} /></div>
	}
	if (props.cart.p7 !== "0") {
		P7 = <div><br /><CartItem atc={props.atc} id="7" img={Sassy} name={"Sassy"} price="14.99" quantity={props.cart.p7} /></div>
	}
	if (props.cart.p8 !== "0") {
		P8 = <div><br /><CartItem atc={props.atc} id="8" img={Bossy} name={"Bossy"} price="14.99" quantity={props.cart.p8} /></div>
	}
	if (props.cart.p9 !== "0") {
		P9 = <div><br /><CartItem atc={props.atc} id="9" img={Hollywood} name={"Hollywood"} price="15.99" quantity={props.cart.p9} /></div>
	}
	if (props.cart.p10 !== "0") {
		P10 = <div><br /><CartItem atc={props.atc} id="10" img={Mirror} name={"Mini Starlux Mirror"} price="12.99" quantity={props.cart.p10} /></div>
	}
	if (props.cart.p11 !== "0") {
		P11 = <div><br /><CartItem atc={props.atc} id="11" img={MagicLiner} name={"Magic Liner"} price="11.00" quantity={props.cart.p11} /></div>
	}
	
	return (
		<div id="CartPage">
			<div id="ItemDiv">
				{P1}
				{P2}
				{P3}
				{P4}
				{P5}
				{P6}
				{P7}
				{P8}
				{P9}
				{P10}
				{P11}
			</div>
			
			<div id="CartSpace">
			&nbsp;
			</div>
			<ProductDisplay handleClick={handleClick} c={props.cart}/>
		</div>
	);
};

export default Cart;