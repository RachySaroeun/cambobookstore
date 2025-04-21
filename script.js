function toggleContact() {
    const info = document.getElementById('contact-info');
    info.style.display = info.style.display === 'none' ? 'block' : 'none';
  }
  document.getElementById("toggle-theme").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  
    const isDark = document.body.classList.contains("dark-mode");
    this.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
  });
  