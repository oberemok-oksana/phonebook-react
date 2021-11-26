import { Component } from "react";

class AddContactForm extends Component {
  state = {
    id: 5,
  };

  updateId = () => {
    this.setState(({ id }) => {
      console.log(id);
      console.log(this.state.id);
      return { id: id + 1 };
    });
  };

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
        id: this.state.id,
      };
      this.updateId();
      this.props.onSubmitAddContactForm(contact);
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
