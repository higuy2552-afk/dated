const loader = document.getElementById('loader');
    const enter = document.getElementById('enterBtn');
    enter.addEventListener('click', () => {
      loader.classList.add('hidden');
      document.body.classList.remove('locked');
      document.querySelectorAll('.reveal').forEach((el, i) => setTimeout(() => el.classList.add('visible'), i * 120));
    });
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    }), { threshold: .12 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
