if (!customElements.get('maripozari-reel')) {
  customElements.define(
    'maripozari-reel',
    class extends HTMLElement {
      connectedCallback() {
        const track = this.querySelector('[data-reel-track]');
        if (!track) return;

        this.querySelectorAll('[data-reel-dir]').forEach((button) => {
          button.addEventListener('click', () => {
            const slide = track.querySelector('[data-reel-slide]');
            const styles = window.getComputedStyle(track);
            const gap = parseFloat(styles.columnGap || styles.gap) || 12;
            const distance = (slide ? slide.getBoundingClientRect().width : 280) + gap;
            track.scrollBy({
              left: distance * Number(button.dataset.reelDir),
              behavior: 'smooth',
            });
          });
        });
      }
    }
  );
}
