import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
  }
  render() {
    return (
      <div className="App container-fluid">
        <div className = 'container'>
          <p>Contact Form</p>
            <form onSubmit = {this.handleSubmit} className = "contact-form" >
            <div className="field ">
              <div className = 'row'> 
                <label className="label">Full Name</label>
                <input name="fullname" type="text" placeholder="Full Name" className="input"></input>
                </div>

                <div className = 'row'>
                <label className="label">Email Address</label>
                <input name="email" type="email" placeholder="Email Address" className="input"></input>
                </div>
                

                <div className = 'row'>
                <label className="label">Message here</label>
                <textarea name='message'></textarea>
                </div>                
                  <div className = 'row'>
                      <input type='checkbox' name="a"></input>
                      <label className="label">I agree to the processing of personal data</label>
                  </div>
                  


                <div className="control row">
                <button type="submit" className="button">Submit</button>
                </div>
            </div>
            </form>
        </div>
        
      </div>
    );
  }
}

export default App;
