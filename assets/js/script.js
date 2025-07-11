const form = document.getElementById('formularioContacto');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const modal = new bootstrap.Modal(document.getElementById('modalExito'));
    modal.show();
    form.reset();
});