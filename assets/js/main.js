function showPage(pageId) {
  document.querySelectorAll('.page').forEach(function(page) {
    page.classList.remove('active');
  });
  var target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.add('active');
  }
  window.scrollTo(0, 0);
  setTimeout(observeAnimations, 100);  // ← ថែមបន្ទាត់នេះ
}

let lastScrollY = window.scrollY;
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    nav.classList.add("nav-hidden");
  } else {
    nav.classList.remove("nav-hidden");
  }
  lastScrollY = window.scrollY;
});

/* Floating Chat */
function toggleChat() {
  const chatContainer = document.querySelector('.chat-container');
  chatContainer.classList.toggle('active');
}
window.onclick = function(event) {
  const chatContainer = document.querySelector('.chat-container');
  if (!chatContainer.contains(event.target) && chatContainer.classList.contains('active')) {
    chatContainer.classList.remove('active');
  }
}

/* Scroll Animations */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

function observeAnimations() {
  document.querySelectorAll('.fade-up, .fade-left, .fade-right').forEach(el => {
    // Reset visibility
    el.classList.remove('visible');
    
    // Check if element is already in viewport
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('visible'); // ← បង្ហាញភ្លាម ប្រសិនបើនៅក្នុង viewport
    } else {
      observer.observe(el);
    }
  });
}

observeAnimations();

/* Hamburger Menu */
function toggleMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
}

// បិទ menu ពេលចុច link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('hamburger').classList.remove('open');
    document.querySelector('.nav-links').classList.remove('open');
  });
});