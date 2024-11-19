class AsyncForm {
  static element;

  constructor(element) {
      if(element === null){
        throw "Элемент не найден";
      }
      this.element = element;
      this.registerEvents();
    }

  registerEvents() {
    const btnSubmit = Array.from(document.querySelectorAll(".btn-primary"));
    btnSubmit.forEach(btn => {
      btn.addEventListener("click", (e) => {
          e.preventDefault();
          this.submit();
        // }
      })
    }) 
  }

  getData() {
    const dataArr = Array.from(this.element.querySelectorAll(".form-control"));
    const data = {};
    dataArr.forEach( elem => {
      data[elem.getAttribute("name")] = elem.value;
    })
    return data; 
  }

  onSubmit(options){

  }

  submit() {
    this.onSubmit(this.getData());
  }
}
