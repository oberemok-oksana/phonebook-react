import { Component } from "react";

class SelectedContact extends Component {
  render() {
    let { activeContact } = this.props;
    return (
      <div>
        <div>{activeContact ? activeContact.name : ""}</div>
        <div>{activeContact ? activeContact.type : ""}</div>
        <div>{activeContact ? activeContact.value : ""}</div>
      </div>
    );
  }
}

export default SelectedContact;
