function showDemo(type) {
    alert(`Démo ${type} : Ceci simule un chargement dynamique. En prod, fetch('/api/${type}').then(data => console.log(data));`);
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    if (email && message) {
        // En prod : fetch('contact.php', {method: 'POST', body: new FormData(this)});
        alert('Message envoyé ! (Simulé en JS)');
    } else {
        alert('Remplis tous les champs !');
    }
});