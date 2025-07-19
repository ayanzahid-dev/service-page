// Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const successMessage = document.getElementById('successMessage');

  if (!name.value || !email.value || !message.value) {
    successMessage.style.color = 'red';
    successMessage.textContent = 'All fields are required.';
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailPattern)) {
    successMessage.style.color = 'red';
    successMessage.textContent = 'Please enter a valid email.';
    return;
  }

  successMessage.style.color = 'green';
  successMessage.textContent = 'Thank you for contacting us!';
  name.value = '';
  email.value = '';
  message.value = '';
});

// Scroll to Top
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.onscroll = function () {
  if (document.documentElement.scrollTop > 300) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
};

scrollToTopBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
});
});
// Toggle Mobile Navigation
document.getElementById('menuToggle').addEventListener('click', function () {
  document.querySelector('.nav-links').classList.toggle('show');
});