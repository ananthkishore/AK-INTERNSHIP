// Dynamic Year Update in Footer
const footer = document.querySelector('footer p');
footer.innerHTML = `&copy; ${new Date().getFullYear()} Kishore. All Rights Reserved.`;

// Optional: Add theme toggle functionality
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Theme';
toggleButton.style.margin = '20px';
toggleButton.style.padding = '10px';
toggleButton.style.backgroundColor = '#4CAF50';
toggleButton.style.color = '#fff';
toggleButton.style.border = 'none';
toggleButton.style.cursor = 'pointer';
toggleButton.style.borderRadius = '5px';
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

const style = document.createElement('style');
style.textContent = `
  .dark-mode {
    background-color: #333;
    color: #fff;
  }
  .dark-mode .project-card {
    background-color: #444;
    border-color: #666;
  }
`;
document.head.appendChild(style);
