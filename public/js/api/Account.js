class Account extends Entity {
  URL = "/account"

  static get(id = "", callback){
    createRequest({
      url: this.URL,
      method: "GET",
      });
  }
}
