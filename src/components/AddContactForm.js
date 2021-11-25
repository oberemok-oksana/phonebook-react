import { Component } from "react";

class AddContactForm extends Component {
  id = 4;
  onAddContact = (e) => {
    e.preventDefault();

    const contact = {
      name: e.target.elements["name"].value,
      type: e.target.elements["type"].value,
      value: e.target.elements["value"].value,
      id: this.id++,
    };

    this.props.onAddContact(contact);
  };

  render() {
    return (
      <form className="add-form" onSubmit={this.onAddContact}>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="Enter a name" name="name" />

        <select name="type">
          <option value="phone">Phone</option>
          <option value="email">Email</option>
        </select>
        <label htmlFor="label">Value</label>
        <input type="text" name="value" />

        <button type="submit">Add Contact</button>
      </form>
    );
  }
}

export default AddContactForm;
