import "./App.css";
import Contacts from "./components/Contacts";
import { Component } from "react";
import SelectedContact from "./components/SelectedContact";
import AddContactForm from "./components/AddContactForm";

class App extends Component {
  state = {
    contacts: [
      { id: 1, name: "Vova", type: "phone", value: "0990909" },
      { id: 2, name: "Oksana", type: "phone", value: "03343423" },
      { id: 3, name: "Sveta", type: "email", value: "099@gmail.com" },
    ],
    activeContactId: null,
  };

  setToActive = (id) => {
    this.setState({ activeContactId: id });
  };

  findActiveContact = () => {
    return this.state.contacts.find(
      (contact) => contact.id === this.state.activeContactId
    );
  };

  onAddContact = (contact) => {
    this.setState(({ contacts }) => {
      return { contacts: contacts.concat(contact) };
    });
  };

  render() {
    return (
      <div className="App">
        <Contacts
          contacts={this.state.contacts}
          onContactClick={this.setToActive}
          activeContactId={this.state.activeContactId}
        />
        <SelectedContact activeContact={this.findActiveContact()} />
        <AddContactForm onAddContact={this.onAddContact} />
      </div>
    );
  }
}

export default App;
