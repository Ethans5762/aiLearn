import React from 'react'
import '../assets/App.css';
import Banner from "../components/Banner"
import Content from "../components/Content"
import Learn from "../views/Learn"
import Resources from "../views/Resources"
import Hardware from "../views/Hardware"

export default function Home() {
	return (
	  <div className="App">
		<Banner />
      	<Content />
		<Learn />
		<Resources />
      	<Hardware />
	  </div>
	);
}