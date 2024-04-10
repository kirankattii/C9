import React, { useState } from "react"
import "./navbar.css"
import { assets } from "../../assets/asset"
import { Link } from "react-router-dom"
const Navbar = () => {
	// const [moblieMenu, setMobileMenu] = useState(false)
	// const toggleMenu = () => {
	// 	moblieMenu ? setMobileMenu(false) : setMobileMenu(true)
	// }

	return (
		<div className="navbar">
			<nav>
				<img
					className="logo"
					src={assets.c9logo}
					alt=""
				/>
				<ul>
					<li>HOME</li>
					<li>STORY</li>
					<li>WORK</li>
					<li>MENU</li>
					<li>CONTACT</li>
				</ul>
			</nav>
		</div>
	)
}

export default Navbar
