import React from "react";
import "./Home.css";
import GalleryElement from "./GalleryElement";

import ex0 from "./GalleryImages/image_6487327.JPG";
import ex1 from "./GalleryImages/image_64873271.JPG";
import ex2 from "./GalleryImages/image_64873272.JPG";
import ex3 from "./GalleryImages/image_64873273.JPG";
import ex4 from "./GalleryImages/image_64873274.JPG";
import ex5 from "./GalleryImages/image_64873275.JPG";
import ex6 from "./GalleryImages/image_64873276.JPG";
import ex7 from "./GalleryImages/image_64873277.JPG";

import pic1 from "./GalleryImages/pic1.jpg";
import sc from "./GalleryImages/sc.svg";
import ig from "./GalleryImages/iglogo.gif";
import tt from "./GalleryImages/tiktok.png";

import LOGO from "./CircularLogo.png";

class Home extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			selectedSlide: "0",
			atc: "f",
			atc_name: "",
			atc_price: "",
			atc_ID: ""
		}
	}
	
	
	calculateTotalAmount(c) {
		return (parseInt(c.p1)+parseInt(c.p2)+parseInt(c.p3)+parseInt(c.p4)+parseInt(c.p5)+parseInt(c.p6)+parseInt(c.p7)+parseInt(c.p8)+parseInt(c.p9)+parseInt(c.p10));
	}
	
	render() {
		var atc;
		
		if (this.state.atc === "t") {
			atc = (
				<div id="HOME_ATC">
					<div id="HOME_ATC_BAR">
						<p id="HOME_ATC_P"></p>
					</div>
				</div>
			);
		}
		
		return(
			<div id="HOMEPAGE">
				<div id="TOPDIV">
					<strong>S t a r l u x&nbsp;&nbsp;&nbsp;L a s h e s</strong>
					<img src={sc} id="TOPDIV_CART" onClick={this.props.gtc}>
						
					</img>
					<p id="TOP_DIV_T" onClick={this.props.gtc}><strong>{this.calculateTotalAmount(this.props.cart)}</strong></p>
				</div>
				<img id="LOGO_SLIDE_IMG" src={LOGO}></img>
				
				<div id="HOME_ABOUT">
					<div id="HOME_ABOUT_CONT_DIV">
						<h1 id="HOME_ABOUT_P_TITLE">
							About Us!
						</h1>
						<p id="HOME_ABOUT_CONT">
							My name is Connie and I am the owner of Starlux Lashes. Starlux Lashes is a small owned buisness that launched in April of 2021 in Abilene Texas, but shortly moved to California.
							Starlux Lashes is judgemental free and welcomes everybody as family!
							Growing up, makeup became a coping mechanism and passion of mine, and now I turned my dream of owning a cosmetic line into a reality.
						</p>
					</div>
					<div id="HOME_ABOUT_IMG_DIV">
						<img src={pic1} id="HOME_ABOUT_IMG">
							
						</img>
					</div>
				</div>
				<br/>
				<br/>
				<br />
				<div id="PRODUCT_GALLERY">
					<GalleryElement left={"0px"} image={ex2} lashname={"Test Name"} price={"14.99 + 4.99 shipping"} description={"This is a test description"} message={this.props.gts}/>
					<p className="LASHNAMEPRICE_HOME"><strong>Sweetheart - </strong>$13.99</p>
					<br />
					<GalleryElement left={"700px"} image={ex4} lashname={"Test Name"} price={"14.99 + 4.99 shipping"} description={"This is a test description"} message={this.props.gts}/>
					<p className="LASHNAMEPRICE_HOME"><strong>Flirt - </strong>$12.99</p>
					<br />
					<GalleryElement left={"1400px"} image={ex5} lashname={"Test Name"} price={"14.99 + 4.99 shipping"} description={"This is a test description"} message={this.props.gts}/>
					<p className="LASHNAMEPRICE_HOME"><strong>DramaQueen - </strong>$15.99</p>
					
				</div>
				<br />
				<br />
				<p id="NAME"><strong>Contact</strong></p>
				<p id="EMAIL"><strong>Email: </strong>starluxlashes@gmail.com</p>
				<div id="SOCIALMEDIA">
					<img src={ig} id="IG" onClick={() => {window.location.href = "https://www.instagram.com/starluxlashes_/"}}></img>
					<img src={tt} id="TIKTOK" onClick={() => {window.location.href = "https://www.tiktok.com/@starluxlashes_"}}></img>
				</div>
				
				{atc}
			</div>
		);
	}
	
	
	
}

export default Home;