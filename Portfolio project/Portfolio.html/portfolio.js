// Smooth Scroll for Navigation Links
document.querySelectorAll('.menu li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: 'smooth',
      });
    }
  });
});
// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 60,
      behavior: 'smooth'
    });
  });
});

// Add fade-in animation when About Me section enters the viewport
const aboutSection = document.querySelector('.about-me');


new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        aboutSection.classList.add('fade-in');
      }
    });
  },
  {
    threshold: 0.5,
  }
).observe(aboutSection);

// Hover effect for image
const aboutImg = document.querySelector('.about-img');
aboutImg.addEventListener('mouseover', () => {
  aboutImg.style.transform = 'scale(1.1)';
  aboutImg.style.transition = 'transform 0.3s ease-in-out';
});

aboutImg.addEventListener('mouseleave', () => {
  aboutImg.style.transform = 'scale(1)';
});

// Add "visible" class to sections when they come into view
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        aboutSection.classList.add('fade-in');
      }
    });
  },
  {
    threshold: 0.5,
  }
).observe(section));

// Change navbar style on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
// Animate Skills Section Icons on Scroll
const skills = document.querySelectorAll('.skill');

const skillsObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = `${index * 0.2}s`; // Stagger animation
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.3 });

skills.forEach(skill => skillsObserver.observe(skill));

// Add Bounce Effect on Hover
skills.forEach(skill => {
  skill.addEventListener('mouseenter', () => {
    skill.classList.add('bounce');
  });

  skill.addEventListener('animationend', () => {
    skill.classList.remove('bounce'); // Reset animation
  });
});

// Keyframes for Bounce Effect
const style = document.createElement('style');
style.textContent = `
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-15px);
    }
    60% {
      transform: translateY(-8px);
    }
  }
  .bounce {
    animation: bounce 1s;
  }
`;
document.head.appendChild(style);

// Sticky Navbar on Scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.position = 'fixed';
    navbar.style.top = '10';
    navbar.style.width = '100%';
    navbar.style.background = '#000';
    navbar.style.zIndex = '999';
  } else {
    navbar.style.position = 'relative';
    navbar.style.background = 'transparent';
  }
});


// Add Interactive Animation on Load
document.addEventListener('DOMContentLoaded', () => {
  const heroText = document.querySelector('.hero h1');
  heroText.style.opacity = '0';
  heroText.style.transform = 'translateY(20px)';
  setTimeout(() => {
    heroText.style.opacity = '1';
    heroText.style.transform = 'translateY(0)';
    heroText.style.transition = 'all 1s ease';
  }, 500);
});

// Smooth Scrolling
document.querySelectorAll('.menu li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const sectionId = this.getAttribute('href').substring(1);
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Sticky Navbar
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.position = 'fixed';
    navbar.style.top = '0';
    navbar.style.background = '#111';
  } else {
    navbar.style.position = 'relative';
    navbar.style.background = 'transparent';
  }
});

