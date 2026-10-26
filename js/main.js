(function () {
  "use strict";

  var root = document.documentElement;
  var themeToggle = document.getElementById("themeToggle");
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");
  var form = document.getElementById("contactForm");
  var statusEl = document.getElementById("formStatus");

  // ---- Theme toggle -------------------------------------------------------
  function updateThemeIcon() {
    var dark = root.getAttribute("data-theme") === "dark";
    themeToggle.textContent = dark ? "\u2600" : "\u263E";
  }

  themeToggle.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) { /* storage unavailable */ }
    updateThemeIcon();
  });
  updateThemeIcon();

  // ---- Mobile navigation --------------------------------------------------
  navToggle.addEventListener("click", function () {
    var open = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  navLinks.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  // ---- Reveal sections on scroll -----------------------------------------
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  // ---- Highlight the current section in the nav --------------------------
  var sections = document.querySelectorAll("main section[id]");
  var links = document.querySelectorAll(".nav-links a");
  if ("IntersectionObserver" in window) {
    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          links.forEach(function (link) {
            link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
          });
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach(function (section) { navObserver.observe(section); });
  }

  // ---- Contact form: validate, then open the visitor's email app ---------
  function showStatus(message, type) {
    statusEl.textContent = message;
    statusEl.className = "form-status " + type;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var name = form.elements.name.value.trim();
    var email = form.elements.email.value.trim();
    var message = form.elements.message.value.trim();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      showStatus("Please fill in all fields.", "error");
      return;
    }
    if (!emailPattern.test(email)) {
      showStatus("Please enter a valid email address.", "error");
      return;
    }

    var subject = encodeURIComponent("Portfolio enquiry from " + name);
    var body = encodeURIComponent(message + "\n\nFrom: " + name + " (" + email + ")");
    window.location.href = "mailto:agnettamawia927@gmail.com?subject=" + subject + "&body=" + body;
    showStatus("Opening your email app...", "ok");
    form.reset();
  });

  // ---- Footer year --------------------------------------------------------
  document.getElementById("year").textContent = new Date().getFullYear();
})();
