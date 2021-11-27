import { Component } from "react";

class AddContactForm extends Component {
  createNewContact = (e) => {
    e.preventDefault();
    let inputName = e.target.elements["name"].value;
    let inputType = e.target.elements["type"].value;
    let inputValue = e.target.elements["value"].value;

    if (inputName && inputType && inputValue) {
      const contact = {
        name: inputName,
        type: inputType,
        value: inputValue,
      };
      this.props.onSubmitAddContactForm(
        contact.name,
        contact.type,
        contact.value
      );
    } else {
      alert("Please fill in all the fields.");
    }
    e.target.elements["name"].value = "";
    e.target.elements["type"].value = "phone";
    e.target.elements["value"].value = "";
  };

  render() {
    return (
      <form className="block-item" onSubmit={this.createNewContact}>
        Add new contact here:
        <input
          className="form-item "
          type="text"
          placeholder="Enter a name"
          name="name"
        />
        <select className="form-item " name="type">
          <option value="phone">Phone</option>
          <option value="email">Email</option>
        </select>
        <input
          className="form-item "
          type="text"
          placeholder="Enter a value"
          name="value"
        />
        <button type="submit" className="submit-btn">
          Add Contact
        </button>
      </form>
    );
  }
}

export default AddContactForm;
