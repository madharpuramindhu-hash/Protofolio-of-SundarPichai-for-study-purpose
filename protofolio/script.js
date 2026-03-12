
window.onload = function() {

  var bars = document.querySelectorAll('.bar-fill');
  var skillsSection = document.querySelector('.skills-grid');

  var barObserver = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting) {
      bars.forEach(function(bar) {
        var target = bar.getAttribute('data-width');
        bar.style.width = target + '%';
      });
      barObserver.unobserve(skillsSection);
    }
  });

  barObserver.observe(skillsSection);

  var items = document.querySelectorAll('.tl-item');

  var tlObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        tlObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  items.forEach(function(item) {
    tlObserver.observe(item);
  });

  var navbar = document.querySelector('nav');

  window.onscroll = function() {
    if (window.scrollY > 30) {
      navbar.style.boxShadow = '0 4px 20px rgba(138,43,226,0.25)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  };

};