function filterPackages() {
    const minPrice = parseInt(document.getElementById('min-price').value) || 0;
    const maxPrice = parseInt(document.getElementById('max-price').value) || Infinity;

    const packages = document.querySelectorAll('.package');
    packages.forEach(package => {
        const packageMin = parseInt(package.getAttribute('data-min'));
        const packageMax = parseInt(package.getAttribute('data-max'));

        if (packageMin <= maxPrice && packageMax >= minPrice) {
            package.style.display = 'block';
        } else {
            package.style.display = 'none';
        }
    });
}
