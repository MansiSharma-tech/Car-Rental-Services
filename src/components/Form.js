import React, { Component } from 'react';
import './Form.css';

class Form extends Component{
	constructor(props){
		super(props);
		this.state={fullname: "Mansi Sharma",
                     PhoneNum: "7982282325",
                     IssueDate: "12-4-2020",
                     ReturnDate: "14-4-2020"
	                }
	}
	 

handlechangeall = (event) =>{
 this.setState ( { [event.target.name] :event.target.value  } )
}

handlesubmit = (event) => {
	 alert( JSON.stringify(this.state))
	 event.preventDefault();
}
render()
	{
		return(
			<div>
	<form onSubmit = {this.handlesubmit}>
		    
		           <h1>Form</h1>
		          <label>Customer Name </label><br/>
		          <input type="text" name="fullname" value={this.state.fullname} onChange={this.handlechangeall}/> <br/>

		          <label>Phone Number </label><br/>
		          <input type="number" name="PhoneNum" value={this.state.PhoneNum} onChange={this.handlechangeall} /> <br/>

		          <label>Issue Date </label><br/>
		          <input type="date" name="IssueDate" value={this.state.IssueDate} onChange={this.handlechangeall}/> <br/>

		          <label>Return Date </label><br/>
		          <input type="date" name="ReturnDate" value={this.state.ReturnDate} onChange={this.handlechangeall} /> <br/>

		            <input type="submit" value="Submit" /> <br/>
		  
		</form> 
		</div>
		)
	}
	}
export default Form;



	