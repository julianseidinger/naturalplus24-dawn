/* NaturalPlus24 – Karussell-Navigation
   Vanilla JS: Pfeil-Buttons scrollen den Track um eine Kartenbreite.
   Kein Auto-Play, kein Infinite-Loop – natives CSS scroll-snap übernimmt
   das Einrasten. Mehrere Karussell-Instanzen auf einer Seite unterstützt. */

(function () {
  'use strict';

  /**
   * Initialisiert Prev/Next-Buttons für eine Karussell-Instanz.
   * @param {HTMLElement} carousel - Die .np-carousel-Section
   */
  function initCarousel(carousel) {
    const track   = carousel.querySelector('.np-carousel__track');
    const btnPrev = carousel.querySelector('.np-carousel__btn--prev');
    const btnNext = carousel.querySelector('.np-carousel__btn--next');

    if (!track || !btnPrev || !btnNext) return;

    /** Breite eines Items inkl. Gap als Scroll-Distanz */
    function getScrollStep() {
      const firstItem = track.querySelector('.np-carousel__item');
      if (!firstItem) return track.clientWidth;
      const style = getComputedStyle(track);
      const gap   = parseFloat(style.columnGap || style.gap || '0');
      return firstItem.offsetWidth + gap;
    }

    /** Pfeil-Zustand nach aktuellem Scroll aktualisieren */
    function updateButtons() {
      const scrollLeft = track.scrollLeft;
      const maxScroll  = track.scrollWidth - track.clientWidth;

      btnPrev.disabled = scrollLeft <= 1;
      btnNext.disabled = scrollLeft >= maxScroll - 1;
    }

    btnPrev.addEventListener('click', function () {
      track.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
    });

    btnNext.addEventListener('click', function () {
      track.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
    });

    /* Pfeil-Zustand nach jedem Scroll aktualisieren */
    track.addEventListener('scroll', updateButtons, { passive: true });

    /* Initialer Zustand */
    updateButtons();
  }

  /* Alle Karussells auf der Seite initialisieren */
  document.querySelectorAll('.np-carousel').forEach(initCarousel);
})();
