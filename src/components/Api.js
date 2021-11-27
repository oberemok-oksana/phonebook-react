class Api {
  token =
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJPa3NhbmEiLCJpYXQiOjE2MzgwMTU5OTksImV4cCI6MTYzODAxOTU5OX0.p6s-UwkPKRkPSI7D3VIN35XFFCjcJFxsBbK-Bs1nNsI";

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
}

const api = new Api();

export default api;
