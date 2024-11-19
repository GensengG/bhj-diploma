class Sidebar {
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  static initToggleButton() {
    const sidebarBtn = document.querySelector(".sidebar-toggle");
    const body = document.body;

    sidebarBtn.addEventListener("click", () => {
      body.classList.toggle("sidebar-open");
      body.classList.toggle("sidebar-collapse");
    })
  }

  static initAuthLinks() {
    const modalRegister = document.querySelector("#modal-register");
    const regist = document.querySelector(".menu-item_register");
    regist.addEventListener("click", (e) => {
      e.preventDefault();
      const modal = new Modal(modalRegister);
      modal.open();
    })

    const modalLogin = document.querySelector("#modal-login");
    const log = document.querySelector(".menu-item_login");
    log.addEventListener("click", (e) => {
      e.preventDefault();
      const modal = new Modal(modalLogin);
      modal.open();
    })

    const modalLogout = document.querySelector(".menu-item_logout");
    modalLogout.addEventListener("click", (e) => {
      e.preventDefault();
      User.logout();
      if(response.success){
        App.setState("init");
      }
    })
  }
}
