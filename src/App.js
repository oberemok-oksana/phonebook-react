import "./App.css";
import { Component } from "react";
import Contacts from "./components/Contacts";
import ActiveContact from "./components/ActiveContact";
import AddContactForm from "./components/AddContactForm";
import api from "./components/Api";
import Spinner from "./components/Spinner";

class App extends Component {
  state = {
    contacts: [],
    activeContact: null,
    loading: true,
  };

  setToActive = (id) => {
    this.setState(({ contacts }) => {
      return { activeContact: contacts.find((contact) => contact.id === id) };
    });
  };

  addNewContact = (contact) => {
    this.setState(({ contacts }) => {
      return { contacts: contacts.concat(contact) };
    });
  };

  componentDidMount() {
    api.getAllContacts().then((response) => {
      this.setState(() => ({ contacts: response.contacts, loading: false }));
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.loading ? (
          <Spinner />
        ) : (
          <Contacts
            contacts={this.state.contacts}
            onContactClick={this.setToActive}
            activeContact={this.state.activeContact}
          />
        )}
        <ActiveContact activeContact={this.state.activeContact} />
        <AddContactForm onSubmitAddContactForm={this.addNewContact} />
      </div>
    );
  }
}

export default App;
