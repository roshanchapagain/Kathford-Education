// Scroll reveal animation
const revealObs = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(function(el) {
  revealObs.observe(el);
});

// Counter animation
const counterObs = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (!entry.isIntersecting) return;
    var el = entry.target;
    var target = parseInt(el.dataset.count);
    var suffix = el.dataset.suffix || '';
    var current = 0;
    var step = Math.max(1, Math.ceil(target / 60));
    var timer = setInterval(function() {
      current = Math.min(current + step, target);
      el.textContent = current.toLocaleString() + suffix;
      if (current >= target) clearInterval(timer);
    }, 20);
    counterObs.unobserve(el);
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(function(el) {
  counterObs.observe(el);
});

// Prevent empty anchor jumps
document.querySelectorAll('a[href="#"]').forEach(function(a) {
  a.addEventListener('click', function(e) { e.preventDefault(); });
});
