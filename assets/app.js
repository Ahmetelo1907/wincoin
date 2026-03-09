document.addEventListener('DOMContentLoaded',()=> {
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('show');
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => observer.observe(el));

  const supplyTarget = document.querySelector('[data-supply-target]');
  if (supplyTarget) {
    const end = Number(supplyTarget.dataset.supplyTarget || 0);
    let current = 0;
    const step = Math.max(1, Math.floor(end / 88));
    const fmt = new Intl.NumberFormat('en-US');
    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      supplyTarget.textContent = fmt.format(current) + ' WIN';
    }, 18);
  }

  const bars = document.querySelectorAll('.bar-fill');
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = (entry.target.dataset.value || 0) + '%';
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(bar => barObserver.observe(bar));
});
