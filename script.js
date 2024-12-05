// script.js

document.addEventListener('DOMContentLoaded', function() {
  const fadeInSections = document.querySelectorAll('.fade-in');

  window.addEventListener('scroll', checkVisibility);

  function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.9;

    fadeInSections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add('visible');  // visible クラスを追加
      }
    });
  }

  checkVisibility(); // ページロード時に実行
});
