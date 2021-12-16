import React from "react";
import ShopItem from "./ShopItem";
import "./ShopContent.css";

import Sweetheart from "./Images/image_64873272.JPG";
import Flirt from "./Images/image_64873274.JPG";
import DramaQueen from "./Images/image_64873275.JPG";

import Attitude from "./Images/image_6487327.JPG";
import GirlsNight from "./Images/image_64873278.JPG";
import Sassy from "./Images/image_64873276.JPG";

import Bossy from "./Images/image_64873271.JPG";
import Hollywood from "./Images/image_64873277.JPG";
import Shy from "./Images/image_64873273.JPG";

import Mirror from "./Images/Mirror_c.jpg";

import MagicLiner from "./Images/MagicLiner.jpg";

class ShopContent extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return(
			<div id="ShopContent">
				<ShopItem 
					name="Sweetheart" 
					price="$14.99" 
					description="- 3D mink lash"
					description1="- Fluffy"
					description2="- Lasts 25+ wears (with proper care)"
					des={<p className="ContentDescription">
						3D mink lash<br />
						Fluffy<br />
						Lasts 25+ wears (with proper care)
					</p>}
					image={Sweetheart}
					id="6"
					ATC={this.props.ATC}
				/>
					
				<br />
				<br />
				<ShopItem 
					name="Flirt" 
					price="$12.99" 
					description="- 3D mink lash"
					description1="- Fluffy / Flexible Band"
					description2="- Lasts 20+ wears (with proper care)"
					des={<p className="ContentDescription">
						3D mink lash<br />
						Fluffy / Flexible band<br />
						Lasts 20+ wears (with proper care)
					</p>}
					image={Flirt}
					id="4"
					ATC={this.props.ATC}
				/>
				
				<br />
				<br />
				<ShopItem 
					name="DramaQueen" 
					price="$15.99" 
					description="- 25 mm lash"
					description1="- Fluffy"
					description2="- Lasts 25+ wears (with proper care)"
					des={<p className="ContentDescription">
						25 mm lash<br/>
						Fluffy<br />
						Lasts 25+ wears (with proper care)
					</p>}
					image={DramaQueen} 
					id="2"
					ATC={this.props.ATC}
				/>
				<br />
				<br />
				<ShopItem 
					name="Attitude" 
					price="$14.99" 
					description="- 3D mink lash"
					description1="- Lightweight / Fluffy / Flexible band"
					description2="- Lasts 25+ wears (with proper care)"
					des={<p className="ContentDescription">
						3D mink lash<br />
						Lightweight><br />
						Lasts 25+ wears (with proper care)
					</p>}
					image={Attitude} 
					id="3"
					ATC={this.props.ATC}
				/>
				<br />
				<br />
				<ShopItem 
					name="GirlsNight" 
					price="$16.99" 
					description="- 25 mm lash"
					description1="- Fluffy / Dramatic / Comfortable"
					description2="- Lasts 25+ wears (with proper care)"
					des={<p className="ContentDescription">
						25 mm lash<br />
						Fluffy / Dramatic / Comfortable<br />
						Lasts 25+ wears (with proper care)
					</p>}
					image={GirlsNight} 
					id="5"
					ATC={this.props.ATC}
				/>
				<br />
				<br />
				<ShopItem 
					name="Sassy" 
					price="$14.99" 
					description="- 3D mink lash"
					description1="- Fluffy / Flexible band"
					description2="- Lasts 25+ wears (with proper care)"
					des={<p className="ContentDescription">
						3D mink lash<br />
						Fluffy / Flexible band<br />
						Lasts 25+ wears (with proper care)
					</p>}
					image={Sassy} 
					id="7"
					ATC={this.props.ATC}
				/>
				<br />
				<br />
				<ShopItem 
					name="Bossy" 
					price="$14.99" 
					description="- 3D mink lash"
					description1="- Fluffy / Flexible band"
					description2="- Lasts 25+ wears (with proper care)"
					des={<p className="ContentDescription">
						3D mink lash<br />
						Fluffy / Flexible band<br />
						Lasts 25+ wears (with proper care)
					</p>}
					image={Bossy} 
					id="8"
					ATC={this.props.ATC}
				/>
				<br />
				<br />
				<ShopItem 
					name="Hollywood" 
					price="$14.99" 
					description="- 3D mink lash"
					description1="- Fluffy / Flexible band"
					description2="- Lasts 25+ wears (with proper care)"
					des={<p className="ContentDescription">
						3D mink lash<br />
						Fluffy / Flexible band<br />
						Lasts 25+ wears (with proper care)
					</p>}
					image={Hollywood} 
					id="9"
					ATC={this.props.ATC}
				/>
				<br />
				<br />
				<ShopItem 
					name="Shy" 
					price="$12.99" 
					description="- 3D mink lash"
					description1="- Flexible band"
					description2="- Lasts 20+ wears (with proper care)"
					des={<p className="ContentDescription">
						3D mink lash<br />
						Flexible band<br />
						Lasts 20+ wears (with proper care)
					</p>}
					image={Shy} 
					id="1"
					ATC={this.props.ATC}
				/>
				<br />
				<br />
				<ShopItem 
					name="Mini Starlux Mirror" 
					price="$12.99" 
					description="- Mini Mirror"
					description1="- Lightweight"
					description2="- Good for travel"
					des={<p className="ContentDescription">
						Mini mirror<br />
						Good for travel<br />
						Lightweight
					</p>}
					image={Mirror} 
					id="10"
					ATC={this.props.ATC}
				/>
				<br />
				<br />
				<ShopItem 
					name="Black / 2 in 1 magic liner" 
					price="$11.00" 
					description="- Mini Mirror"
					description1="- Lightweight"
					description2="- Good for travel"
					des={<p className="ContentDescription">
						It's a fast drying and long lasting eyeliner allin one. Has 60+ more uses than regular eyelash glue!<br /><br />
						Waterproof<br />
						Can be worn with any lashes.<br />
						No smudges<br />
						Perfect for anywhere application<br />
						Removable with micellar water / cleansing oil
					</p>}
					image={MagicLiner} 
					id="11"
					ATC={this.props.ATC}
				/>
			</div>
		);
	}
}

export default ShopContent;