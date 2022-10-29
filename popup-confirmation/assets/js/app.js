var element = document.getElementsByClassName("modal-information");

Object.values(element).map((e) => {
  e.addEventListener("scroll", (el) => {
    if (e.scrollHeight - e.scrollTop <= Math.ceil(e.offsetHeight)) {
      el.target.nextElementSibling.querySelector(
        ".modal-confirm-btn"
      ).disabled = false;
      el.target.nextElementSibling.querySelector(
        ".modal-reading-val"
      ).value = 1;
    }
  });
});

const checkboxChecked = (el) => {
  document.querySelector(el).checked = true;
  checkLoginBtn();
};

const checkLoginBtn = () => {
  if (
    document.querySelector("#firstCheckbox").checked &&
    document.querySelector("#secondCheckbox").checked &&
    document.querySelector("#thirdCheckbox").checked &&
    parseInt(document.querySelector("#checkInputFirst").value) === 1 &&
    parseInt(document.querySelector("#checkInputSecond").value) === 1 &&
    parseInt(document.querySelector("#checkInputThird").value) === 1
  ) {
    document.querySelector(".general-modal-confirm-btn").disabled = false;
  } else {
    document.querySelector(".general-modal-confirm-btn").disabled = true;
  }
};
