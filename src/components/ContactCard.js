import React, { Component } from 'react';

class ContactCard extends Component{
	render() {
        return (
            <div className="contact-card">
                <img src={this.props.content.imgUrl}/>
                <h3>{this.props.content.name}</h3>
                <p>Phone: {this.props.content.phone}</p>
                <p>Email: {this.props.content.email}</p>
            </div> 
        )
    }
}
export default ContactCard