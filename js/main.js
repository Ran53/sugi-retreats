/**
 * SUGI Retreats - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  // Footer Year Auto Update
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Mobile Navigation Toggle
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      navToggle.classList.toggle('active');
    });

    nav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        navToggle.classList.remove('active');
      });
    });
  }

  // Header Scroll Effect
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Highlight active section on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightNav() {
    const scrollY = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNav);
  highlightNav();
});