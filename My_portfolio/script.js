// Example: Smooth scroll behavior is already enabled via CSS (scroll-behavior: smooth)
// Add animations if needed

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    }, { threshold: 0.1 });
  
    document.querySelectorAll("section").forEach(section => {
      section.classList.add("hidden");
      observer.observe(section);
    });
  });
  