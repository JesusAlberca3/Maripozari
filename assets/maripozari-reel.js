if (!customElements.get('maripozari-reel')) {
  customElements.define(
    'maripozari-reel',
    class extends HTMLElement {
      connectedCallback() {
        const track = this.querySelector('[data-reel-track]');
        const dots = this.querySelector('[data-reel-dots]');
        if (!track || !dots) return;

        const slides = Array.from(track.querySelectorAll('[data-reel-slide]'));
        if (!slides.length) return;

        slides.forEach((slide, index) => {
          const dot = document.createElement('button');
          dot.type = 'button';
          dot.className = 'maripozari-reel__dot';
          dot.dataset.index = String(index);
          dot.setAttribute('aria-label', `Reseña ${index + 1} de ${slides.length}`);
          if (index === 0) dot.setAttribute('aria-current', 'true');
          dot.addEventListener('click', () => {
            slide.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
          });
          dots.appendChild(dot);
        });

        const mark = () => {
          const origin = track.getBoundingClientRect().left;
          let active = 0;
          slides.forEach((slide, index) => {
            if (slide.getBoundingClientRect().left - origin <= 24) active = index;
          });
          dots.querySelectorAll('.maripozari-reel__dot').forEach((dot, index) => {
            if (index === active) dot.setAttribute('aria-current', 'true');
            else dot.removeAttribute('aria-current');
          });
        };

        track.addEventListener('scroll', mark, { passive: true });
        mark();
      }
    }
  );
}
