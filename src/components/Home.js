import React, {Component} from 'react';
import './all.css';

class Home extends Component{
render(){
	return <div class="c1">
	 <div class="c2">
	<img src="https://pngimg.com/uploads/volkswagen/volkswagen_PNG1824.png" />
	<h1> volkswagen </h1>
	    <ul>
	         <li><a href="/VD"> View Details</a></li>
	         <li><a href="/Form"> Book</a></li>
	         </ul>

	</div>

	 <div class="c3">
	<img  src="https://pngimg.com/uploads/audi/audi_PNG1757.png" />
	 <h1> BMW </h1>
		    <ul>
	         <li><a href="/BD"> View Details</a></li>
	         <li><a href="/Form"> Book</a></li>
	         </ul>
	 </div>

	 <div class="c4">
	 <img src="https://static-news.moneycontrol.com/static-mcnews/2020/01/Audi-Q8-front.jpg"  />
	<h1> Audi </h1>
	    <ul>
	         <li><a href="/AD"> View Details</a></li>
	         <li><a href="/Form"> Book</a></li>
	         </ul>
	</div>

	<div class="c5">
		<img src="https://pngimg.com/uploads/mercedes/mercedes_PNG80146.png" />
		<h1> Mercedes </h1>
	    <ul>
	         <li><a href="/MD"> View Details</a></li>
	         <li><a href="/Form"> Book</a></li>
	         </ul>
		</div>

	</div>
};
}
export default 	Home;