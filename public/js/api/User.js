class User {
  URL = this.URL + "/user";

  static setCurrent(user) {
    localStorage.user = JSON.stringify(user);
    console.log(localStorage.user);
  }

  static unsetCurrent() {
    localStorage.removeItem("user");
  }

  static current() {
      console.log(localStorage.user);
  }

  static fetch(callback) {
    createRequest({
      url: this.URL + "/current",
      method: "GET",
      responseType: "json",
      callback: (err, response) => {
        if (response && response.user) {
          this.setCurrent(response.user);
        }
        callback(err, response);
      }
    });
  }

  static login(data, callback) {
    createRequest({
      url: this.URL + "/login",
      method: "POST",
      data,
      callback: (err, response) => {
        if (response && response.user) {
          this.setCurrent(response.user);
        }
        callback(err, response);
      }
    })
  }

  static register(data, callback) {
    createRequest({
      url: this.URL + "/register",
      method: "POST",
      data,
      callback: (err, response) => {
        if (response && response.user) {
          this.setCurrent(response.user);
        }
        callback(err, response);
      }
    })
  }

  static logout(callback) {
    createRequest({
      url: this.URL + "/logout",
      method: "POST",
      data,
      callback: (err, response) => {
        if (response && response.success) {
          this.unsetCurrent();
        }
        callback(err, response);
      }
    })
  }
}
 

