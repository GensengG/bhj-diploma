class Entity {
  URL = "";

  static list(data, callback){
    createRequest({
      url: this.URL,
      method: "GET",
      });
  }


  static create(data, callback) {
    console.log(data);
    createRequest({
      url: this.URL,
      method: "PUT",
      });
  }

  static remove(data, callback ) {
    console.log(data);
    createRequest({
      url: this.URL,
      method: "DELETE",
      });
  }
}
