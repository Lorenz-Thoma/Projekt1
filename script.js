const gallery = document.getElementById('gallery');
const button = document.querySelector('.expand-btn');
let expanded = false;

function toggleGallery() {
  expanded = !expanded;
  gallery.classList.toggle('expanded', expanded);
  button.textContent = expanded ? 'Weniger anzeigen' : 'Erweitern';

  sendHeight()
}


function sendHeight(){
  const height = document.body.scrollHeight;
  alert("height: ", height)
  window.parent.postMessage({ type: 'setHeight', height }, '*');
}


/*function sendHeight() {
  const height = document.body.scrollHeight;
  window.parent.postMessage({ type: 'setHeight', height }, '*');
}

window.onload = sendHeight;
window.addEventListener('resize', sendHeight);*/

// Beispiel: Nachricht an die Hauptseite senden


/*window.onload = function () {
  const message = {
    type: 'userData',
    user: 'Anna',
    age: 22
  };

  // Nachricht an das übergeordnete Fenster (die Wix-Seite) senden
  window.parent.postMessage(message, '*'); // Du kannst statt '*' auch die exakte URL der Wix-Seite eintragen
};*/