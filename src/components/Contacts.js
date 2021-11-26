import { Component } from "react";

class Contacts extends Component {
  render() {
    const { contacts, onContactClick, activeContact } = this.props;
    return (
      <div className="block-item">
        <ul className="contacts-list">
          {contacts.map((contact) => {
            const activeClass =
              contact.id === activeContact?.id ? "active" : "";
            return (
              <li
                className={`contact-item ${activeClass}`}
                key={contact.id}
                onClick={() => {
                  onContactClick(contact.id);
                }}
              >
                {contact.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Contacts;
