import { Component } from "react";

class Filters extends Component {
  searchContacts = (e) => {
    e.preventDefault();
    const type = e.target.elements["type"].value;
    const value = e.target.elements["value"].value;

    let obj;

    if (type === "name") {
      obj = { name: value };
    } else {
      obj = { value: value };
    }

    this.props.onFilter(obj);
  };

  render() {
    return (
      <form className="block-item" onSubmit={this.searchContacts}>
        <select className="form-item" name="type">
          <option value="name">Name</option>
          <option value="value">Value</option>
        </select>
        <input
          name="value"
          className="form-item"
          type="text"
          placeholder="Enter yout text here"
        />
        <button type="submit" className="submit-btn">
          Search
        </button>
        {/* <button className="submit-btn">Reset</button> */}
      </form>
    );
  }
}

export default Filters;
