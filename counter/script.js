const allBtn = this.window.document.querySelectorAll(".btn-area");
const counter = this.window.document.getElementById("counter_value");

allBtn.forEach((button) => {
  button.addEventListener("click", function (e) {
    btnClass = e.target.classList;
    if (btnClass.contains("decrease")) {
      counter.innerHTML--;
    } else if (btnClass.contains("reset")) {
      counter.innerHTML = 0;
    } else if (btnClass.contains("increase")) {
      counter.innerHTML++;
    }
  });
});
