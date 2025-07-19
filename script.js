document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMsg = document.getElementById("formMsg");

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (name === "" || email === "" || message === "") {
    formMsg.textContent = "Please fill out all fields.";
    formMsg.style.color = "red";
  } else if (!email.match(emailPattern)) {
    formMsg.textContent = "Please enter a valid email.";
    formMsg.style.color = "red";
  } else {
    formMsg.textContent = "Thank you! We’ll get back to you soon.";
    formMsg.style.color = "green";
    this.reset();
  }
});

const topBtn = document.getElementById("topBtn");

window.onscroll = function() {
  if (document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
