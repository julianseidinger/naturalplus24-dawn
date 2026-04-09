/* NaturalPlus24 – Bestseller Filter
   Vanilla JS: Produkt-Karten per data-category zeigen/verstecken
   Kein Page-Reload, kein Framework */

(function () {
  'use strict';

  /**
   * Initialisiert die Filter-Leiste einer Bestseller-Grid-Section.
   * Mehrere Instanzen auf einer Seite werden unterstützt.
   */
  function initBestsellerFilter(section) {
    const filterButtons = section.querySelectorAll('.np-filter-btn');
    const productItems  = section.querySelectorAll('.np-bestseller__grid > li[data-category]');

    if (!filterButtons.length || !productItems.length) return;

    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const selectedCategory = btn.dataset.filter;

        // Aktiven Button aktualisieren
        filterButtons.forEach(function (b) {
          b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
        });

        // Produkte ein-/ausblenden
        productItems.forEach(function (item) {
          const itemCategories = item.dataset.category
            ? item.dataset.category.split(',').map(function (c) { return c.trim(); })
            : [];

          if (selectedCategory === 'all' || itemCategories.includes(selectedCategory)) {
            item.classList.remove('np-product-card--hidden');
            item.removeAttribute('aria-hidden');
          } else {
            item.classList.add('np-product-card--hidden');
            item.setAttribute('aria-hidden', 'true');
          }
        });
      });
    });
  }

  // Alle Bestseller-Sections auf der Seite initialisieren
  document.querySelectorAll('.np-bestseller-section').forEach(initBestsellerFilter);
})();
