const toggle = document.getElementById("themeToggle");

// Auto theme from system
if (!localStorage.theme) {
  if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    document.body.classList.add("light");
  }
} else if (localStorage.theme === "light") {
  document.body.classList.add("light");
}

// Theme toggle
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.theme = document.body.classList.contains("light") ? "light" : "dark";
});

// Discord stats fetch with animation
function animateNumberPlus(element, target = 100, duration = 1500) {
  const start = 0;
  const range = target - start;
  const startTime = performance.now();

  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const current = Math.floor(start + range * progress);
    element.innerText = current + "+";
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

// Animate both stats
function fetchStats() {
  const membersEl = document.getElementById("members");
  const onlineEl = document.getElementById("online");

  animateNumberPlus(membersEl);
  animateNumberPlus(onlineEl);
}

// Call once on load
fetchStats();

// Collapsible sections logic
function toggleSection(id) {
  const sections = document.querySelectorAll('.collapsible');
  sections.forEach(section => {
    if (section.id === id) {
      section.classList.toggle('active'); // toggle only the clicked section
      if(section.classList.contains('active')){
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      section.classList.remove('active'); // close everything else
    }
  });
}
