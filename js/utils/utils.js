import { setRouter } from "../router/router.js";

// Set Router
setRouter();

//Backend URL
const backendURL = " https://3427-216-247-44-68.ngrok-free.app";

//Notfications
function successNotification(message, seconds = 0) {
  document.querySelector(".alert-success").classList.remove("d-none");
  document.querySelector(".alert-success").classList.add("d-block");
  document.querySelector(".alert-success").innerHTML = message;

  setTimeout(function () {
    document.querySelector(".alert-success").classList.remove("d-block");
    document.querySelector(".alert-success").classList.add("d-none");
  }, seconds * 1000);
}

function errorNotification(message, seconds = 0) {
  document.querySelector(".alert-danger").classList.remove("d-none");
  document.querySelector(".alert-danger").classList.add("d-block");
  document.querySelector(".alert-danger").innerHTML = message;

  setTimeout(function () {
    document.querySelector(".alert-danger").classList.remove("d-block");
    document.querySelector(".alert-danger").classList.add("d-none");
  }, seconds * 1000);
}

export { backendURL, successNotification, errorNotification };
