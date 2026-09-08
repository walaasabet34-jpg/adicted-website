const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const metric = document.querySelector('.metric-card');
window.addEventListener('pointermove', (e) => {
  if (!metric || window.innerWidth < 800) return;
  const x = (e.clientX / window.innerWidth - .5) * 5;
  const y = (e.clientY / window.innerHeight - .5) * 5;
  metric.style.transform = `rotate(${2 + x * .15}deg) translate(${x}px, ${y}px)`;
});
