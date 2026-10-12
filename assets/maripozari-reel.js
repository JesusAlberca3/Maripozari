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

        const buttons = slides.map((slide, index) => {
          const dot = document.createElement('button');
          dot.type = 'button';
          dot.className = 'maripozari-reel__dot';
          dot.setAttribute('aria-label', `Reseña ${index + 1} de ${slides.length}`);
          dot.addEventListener('click', () => {
            const offset = slide.getBoundingClientRect().left - track.getBoundingClientRect().left;
            track.scrollTo({ left: track.scrollLeft + offset, behavior: 'smooth' });
          });
          dots.appendChild(dot);
          return dot;
        });

        const update = () => {
          const overflow = track.scrollWidth - track.clientWidth > 4;
          dots.hidden = !overflow;
          if (!overflow) return;

          const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
          const origin = track.getBoundingClientRect().left;
          let active = 0;
          let closest = Infinity;
          slides.forEach((slide, index) => {
            const distance = Math.abs(slide.getBoundingClientRect().left - origin);
            if (distance < closest) {
              closest = distance;
              active = index;
            }
          });
          if (atEnd) active = slides.length - 1;

          buttons.forEach((dot, index) => {
            if (index === active) dot.setAttribute('aria-current', 'true');
            else dot.removeAttribute('aria-current');
          });
        };

        track.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);
        update();
      }
    }
  );
}
