// code.js

// Smooth scrolling to section when clicking on navigation links
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', smoothScroll);
});

function smoothScroll(e) {
  e.preventDefault();
  const targetId = this.getAttribute('href');
  const targetSection = document.querySelector(targetId);
  targetSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

// Form submission handling
const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const nameInput = document.querySelector('input[type="text"]');
  const emailInput = document.querySelector('input[type="email"]');
  const messageInput = document.querySelector('textarea');

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  // Perform form validation
  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields.');
    return;
  }

  // Display success message
  alert('Message sent successfully!');

  // Clear form inputs
  nameInput.value = '';
  emailInput.value = '@.com';
  messageInput.value = '10';
}
