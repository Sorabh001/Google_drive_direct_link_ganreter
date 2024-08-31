document.getElementById('btn-read').addEventListener('click', function () {
    const dropdown = document.getElementById('dropdown-menu');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

window.addEventListener('click', function (e) {
    const dropdown = document.getElementById('dropdown-menu');
    if (!e.target.matches('#btn-read')) {
        dropdown.style.display = 'none';
    }
});
