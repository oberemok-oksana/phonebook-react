class Api {
  token =
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJPa3NhbmEiLCJpYXQiOjE2MzgwMTk2NzMsImV4cCI6MTYzODAyMzI3M30.vzfDTE2V4j4Fkb_YBfGtmjH4duaTqFTO3bkeG51k08I";

  login = (login, password) => {
    return fetch("https://mag-contacts-api.herokuapp.com/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login: login,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.status === "ok") {
          this.token = json.token;
        }
        return json;
      });
  };

  getAllContacts = () => {
    return fetch("https://mag-contacts-api.herokuapp.com/contacts", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + this.token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  };

  addNewContact = (name, type, value) => {
    return fetch("https://mag-contacts-api.herokuapp.com/contacts/add", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + this.token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        type: type,
        value: value,
      }),
    }).then((response) => response.json());
  };
}

const api = new Api();

export default api;
