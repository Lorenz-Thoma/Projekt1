const gallery = document.getElementById('gallery');
    const button = document.querySelector('.expand-btn');
    let expanded = false;

    function toggleGallery() {
      expanded = !expanded;
      gallery.classList.toggle('expanded', expanded);
      button.textContent = expanded ? 'Weniger anzeigen' : 'Erweitern';
    }