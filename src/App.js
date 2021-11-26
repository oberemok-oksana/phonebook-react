import "./App.css";
import { Component } from "react";
import Contacts from "./components/Contacts";
import ActiveContact from "./components/ActiveContact";
import AddContactForm from "./components/AddContactForm";

class App extends Component {
  state = {
    contacts: [
      { id: 1, name: "Alex", type: "phone", value: "0995874521" },
      { id: 2, name: "Samuel", type: "phone", value: "0661114521" },
      { id: 3, name: "Alisa", type: "email", value: "067@2gmail.com" },
      { id: 4, name: "John", type: "email", value: "whoiam@i.ua" },
    ],
    activeContact: null,
  };

  setToActive = (id) => {
    this.setState(({ contacts }) => {
      console.log(1);
      return { activeContact: contacts.find((contact) => contact.id === id) };
    });
  };

  addNewContact = (contact) => {
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
          activeContact={this.state.activeContact}
        />
        <ActiveContact activeContact={this.state.activeContact} />
        <AddContactForm onSubmitAddContactForm={this.addNewContact} />
      </div>
    );
  }
}

export default App;
