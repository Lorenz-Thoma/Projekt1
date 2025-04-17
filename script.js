const gallery = document.getElementById('gallery');
const button = document.querySelector('.expand-btn');
let expanded = false;

function toggleGallery() {
  expanded = !expanded;
  gallery.classList.toggle('expanded', expanded);
  button.textContent = expanded ? 'Weniger anzeigen' : 'Erweitern';
}

function sendHeight() {
  const height = document.body.scrollHeight;
  window.parent.postMessage({ type: 'setHeight', height }, '*');
}

window.onload = sendHeight;
window.addEventListener('resize', sendHeight);