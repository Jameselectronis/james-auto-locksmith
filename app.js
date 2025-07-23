
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = form.querySelector('input[type="text"]').value.trim();
            const phone = form.querySelector('input[type="tel"]').value.trim();
            const message = form.querySelector('textarea').value.trim();

            if (!name || !phone || !message) {
                alert('Please fill out all fields before submitting.');
                return;
            }

            alert(`Thanks ${name}, we’ve received your message!`);
            form.reset();
        });
    }
});
