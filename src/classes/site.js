export class Site {
  constructor(selector) {
    this.$el = document.getElementById(selector);
  }

  render(model) {
    this.$el.innerHTML = "";

    model.forEach((block) => {
      this.$el.insertAdjacentHTML("beforeend", block.toHTML());
    });
  }
}
