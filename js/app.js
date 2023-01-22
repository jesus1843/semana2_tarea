document.addEventListener('DOMContentLoaded', function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const contactFormH3 = document.getElementById('contact-form').querySelector('h3');

    contactFormH3.insertAdjacentHTML(
        'afterend',
        `<p class="alert alert-${ +urlParams.get('send') ? 'success' : 'danger' }">${ +urlParams.get('send') ? 'Mensaje enviado' : 'Error al enviar mensaje' }</p>`
    );
});