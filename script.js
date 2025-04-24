const gallery = document.getElementById('gallery');
const button = document.querySelector('.expand-btn');
let expanded = false;

function toggleGallery() {
  expanded = !expanded;
  gallery.classList.toggle('expanded', expanded);
  button.textContent = expanded ? 'Weniger anzeigen' : 'Erweitern';

  /*sendHeight()*/
}

const element = document.getElementById('container');

const resizeObserver = new ResizeObserver((entries) => {
  for (let entry of entries) {
    const { width, height } = entry.contentRect;
    console.log(`Neue Größe: Breite = ${width}px, Höhe = ${height}px`);

    window.parent.postMessage({ type: 'setHeight', height}, '*');
  }
});

resizeObserver.observe(element);
