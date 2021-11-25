import { Component } from "react";

class Contacts extends Component {
  render() {
    let { contacts, onContactClick, activeContactId } = this.props;

    return (
      <ul>
        {contacts.map((contact) => {
          return (
            <li
              key={contact.id}
              onClick={() => onContactClick(contact.id)}
              className={contact.id === activeContactId ? "active" : ""}
            >
              {contact.name}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Contacts;
