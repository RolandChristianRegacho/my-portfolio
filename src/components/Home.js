import React from 'react'
import { Link } from "react-router-dom"
//import myPicture from '../images/grad.png'
import './Home.css'
 
class Home extends React.Component {
	goTo(page) {
		if(page === "twitter") {
			window.open("https://twitter.com/TooOneFor")
		}
		else {
			window.open("https://www.facebook.com/rolandchristiantoo.regacho/")
		}
	}

	render() {
	  return (
		<div id="Home" className = "animate__animated animate__fadeIn" >
			<div id = "home-content">
				<strong><p>Hi!</p><h1 id = "name">I am Roland</h1><p id = "position">Aspiring Web Developer</p></strong>
				<p>
					<button className = "ContactButtons" onClick = {() => this.goTo("twitter")}><i className ="fab fa-twitter"></i></button>
					<button className = "ContactButtons" onClick = {() => this.goTo("facebook")}><i className ="fab fa-facebook"></i></button>
					<Link to = "/my-portfolio/Contact" className = "ContactLink" ><i className ="fas fa-envelope"></i></Link>
					<Link to = "/my-portfolio/Contact" className = "ContactLink" ><i className ="fab fa-skype"></i></Link>
					<Link to = "/my-portfolio/Contact" className = "ContactLink" ><i className ="fas fa-phone-alt"></i></Link>
				</p>
			</div>
			<div id = "myPicture">
			</div>
		</div>
	  )
	}
}
 
export default Home;