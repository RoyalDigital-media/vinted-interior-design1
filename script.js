document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      siteNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', siteNav.classList.contains('open'));
    });
  }

  const filterButtons = document.querySelectorAll('.filter-button');
  const productCards = document.querySelectorAll('.product-card');

  if (filterButtons.length && productCards.length) {
    filterButtons.forEach((button) => {
      button.addEventListener('click', function () {
        filterButtons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');

        const category = button.dataset.filter;
        productCards.forEach((card) => {
          const cardCategory = card.dataset.category.toLowerCase();
          if (category === 'all' || cardCategory === category) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  const galleryItems = document.querySelectorAll('.gallery-figure');
  const lightbox = document.querySelector('.lightbox');
  const lightboxImage = document.querySelector('.lightbox-image');
  const lightboxClose = document.querySelector('.lightbox-close');

  if (galleryItems.length && lightbox && lightboxImage) {
    galleryItems.forEach((item) => {
      item.addEventListener('click', function () {
        const src = item.dataset.full;
        const alt = item.querySelector('img').alt;
        lightboxImage.src = src;
        lightboxImage.alt = alt;
        lightbox.classList.add('open');
      });
    });

    const closeLightbox = () => lightbox.classList.remove('open');

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function (event) {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeLightbox();
      }
    });
  }
});
