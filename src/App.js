import "./App.css";
import { Component } from "react";
import Contacts from "./components/Contacts";
import ActiveContact from "./components/ActiveContact";
import AddContactForm from "./components/AddContactForm";
import api from "./components/Api";
import Spinner from "./components/Spinner";
import Filters from "./components/Filters";

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

  addNewContact = (name, type, value) => {
    api
      .addNewContact(name, type, value)
      .then(() => api.getAllContacts())
      .then((response) => {
        this.setState(() => ({ contacts: response.contacts }));
      });
  };

  componentDidMount() {
    api.getAllContacts().then((response) => {
      this.setState(() => ({ contacts: response.contacts, loading: false }));
    });
  }

  filterContacts = (obj) => {
    api.searchContacts(obj).then((response) => {
      this.setState({ contacts: response.contacts });
    });
  };

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
        <Filters onFilter={this.filterContacts} />
        <AddContactForm onSubmitAddContactForm={this.addNewContact} />
      </div>
    );
  }
}

export default App;
