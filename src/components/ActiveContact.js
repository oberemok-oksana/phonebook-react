import { Component } from "react";

class ActiveContact extends Component {
  render() {
    const { activeContact } = this.props;

    if (!activeContact) {
      return (
        <div className="contact-item">You haven't selected contact yet.</div>
      );
    }

    return (
      <div className="block-item">
        <div className="contact-item">
          {activeContact ? activeContact.name : ""}
        </div>
        <div className="contact-item">
          {activeContact ? activeContact.type : ""}
        </div>
        <div className="contact-item">
          {activeContact ? activeContact.value : ""}
        </div>
      </div>
    );
  }
}

export default ActiveContact;
