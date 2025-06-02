// --------------------------------------
// Smooth scroll to a section by ID
// --------------------------------------
function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

// --------------------------------------
// Confetti on page load
// --------------------------------------
window.addEventListener('load', () => {
  // Fire a quick burst of confetti from the top
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.1 },
    colors: ['#1E90FF', '#FFFFFF', '#FF69B4'],
  });

  // Optional: Continuous confetti for a few seconds
  const duration = 3 * 1000; // 3 seconds
  const animationEnd = Date.now() + duration;
  const defaults = { spread: 60, startVelocity: 30, shapes: ['circle', 'square'] };

  (function frame() {
    confetti({
      ...defaults,
      particleCount: 20,
      origin: { x: Math.random(), y: Math.random() * 0.5 },
      colors: ['#1E90FF', '#FFFFFF', '#FF69B4'],
    });
    if (Date.now() < animationEnd) {
      requestAnimationFrame(frame);
    }
  })();
});
