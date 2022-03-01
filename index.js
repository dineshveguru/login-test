document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").onsubmit = () => {
    const username = document.querySelector("#username").value;
    localStorage.setItem("username", username);
    const password = document.querySelector("#password").value;
    const con_password = document.querySelector("#con_password").value;
    if (password === con_password) {
      document.write(`welcome ${username}`);
    } else {
      location.href("index.html");
    }
  };
});
